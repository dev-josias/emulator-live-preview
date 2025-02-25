import * as vscode from "vscode";
import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

export function activate(context: vscode.ExtensionContext) {
  console.log("Emulator Live Preview extension activated.");

  // Register the webview view provider for the emulator preview
  const emulatorProvider = new EmulatorViewProvider(context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("emulatorView", emulatorProvider)
  );

  // Command: Start Android Emulator
  let startAndroidEmulator = vscode.commands.registerCommand(
    "extension.startAndroidEmulator",
    async () => {
      try {
        // List available Android Virtual Devices
        const { stdout } = await execPromise("emulator -list-avds");
        const avds = stdout.split("\n").filter((line) => line.trim() !== "");

        if (avds.length === 0) {
          vscode.window.showInformationMessage(
            "No Android emulators found. Please create one in Android Studio first."
          );
          return;
        }

        const selectedAvd = await vscode.window.showQuickPick(avds, {
          placeHolder: "Select an Android emulator to start",
        });

        if (!selectedAvd) {
          return;
        }

        try {
          await execPromise(`emulator -avd ${selectedAvd}`);
          vscode.window.showInformationMessage(
            `Android emulator "${selectedAvd}" started successfully!`
          );
          emulatorProvider.setCurrentDevice({
            type: "android",
            name: selectedAvd,
          });
          vscode.commands.executeCommand(
            "workbench.view.extension.emulatorContainer"
          );
        } catch (error: any) {
          // Check if error indicates the emulator is already running
          const errMsg = error.message.toLowerCase();
          if (errMsg.includes("already running")) {
            vscode.window.showWarningMessage(
              `Emulator "${selectedAvd}" is already running.`
            );
            emulatorProvider.setCurrentDevice({
              type: "android",
              name: selectedAvd,
            });
            vscode.commands.executeCommand(
              "workbench.view.extension.emulatorContainer"
            );
            return;
          }
          throw error;
        }
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Error with Android emulator: ${error.message}`
        );
      }
    }
  );

  // Command: Start iOS Simulator
  let startIOSEmulator = vscode.commands.registerCommand(
    "extension.startIOSEmulator",
    async () => {
      // Check if running on macOS
      if (process.platform !== "darwin") {
        vscode.window.showErrorMessage(
          "iOS Simulator is only available on macOS."
        );
        return;
      }

      try {
        const { stdout } = await execPromise(
          "xcrun simctl list devices --json"
        );
        const devicesJson = JSON.parse(stdout);
        const deviceItems: Array<{
          label: string;
          description: string;
          udid: string;
          state: string;
        }> = [];

        for (const runtime in devicesJson.devices) {
          const devices = devicesJson.devices[runtime];
          for (const device of devices) {
            if (
              device.availability &&
              device.availability.indexOf("unavailable") !== -1
            ) {
              continue;
            }
            deviceItems.push({
              label: device.name,
              description: runtime.replace(
                "com.apple.CoreSimulator.SimRuntime.",
                ""
              ),
              udid: device.udid,
              state: device.state,
            });
          }
        }

        if (deviceItems.length === 0) {
          vscode.window.showInformationMessage(
            "No iOS simulators found. Please create one in Xcode first."
          );
          return;
        }

        const selectedDevice = await vscode.window.showQuickPick(deviceItems, {
          placeHolder: "Select an iOS simulator to start",
        });

        if (!selectedDevice) {
          return;
        }

        if (selectedDevice.state !== "Booted") {
          await execPromise(`xcrun simctl boot ${selectedDevice.udid}`);
          vscode.window.showInformationMessage(
            `Booted iOS simulator: ${selectedDevice.label}`
          );
        }

        await execPromise("open -a Simulator");
        vscode.window.showInformationMessage(
          "iOS Simulator opened successfully!"
        );

        emulatorProvider.setCurrentDevice({
          type: "ios",
          name: selectedDevice.label,
          udid: selectedDevice.udid,
        });

        vscode.commands.executeCommand(
          "workbench.view.extension.emulatorContainer"
        );
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Error with iOS simulator: ${error.message}`
        );
      }
    }
  );

  // Command: Connect to Physical Device
  let connectToDevice = vscode.commands.registerCommand(
    "extension.connectToPhysicalDevice",
    async () => {
      try {
        // List connected Android devices
        const { stdout } = await execPromise("adb devices");
        const lines = stdout
          .split("\n")
          .filter(
            (line) =>
              line.trim() !== "" && !line.includes("List of devices attached")
          );

        if (lines.length === 0) {
          vscode.window.showInformationMessage(
            "No physical devices connected. Please connect a device and enable USB debugging."
          );
          return;
        }

        const deviceItems = lines.map((line) => {
          const [id, status] = line.split("\t");
          return {
            label: `Android Device (${status})`,
            description: id,
            id: id,
            type: "android-physical",
          };
        });

        // TODO: Add iOS physical device detection if on macOS

        const selectedDevice = await vscode.window.showQuickPick(deviceItems, {
          placeHolder: "Select a physical device to connect",
        });

        if (!selectedDevice) {
          return;
        }

        emulatorProvider.setCurrentDevice({
          type: "android-physical",
          name: selectedDevice.label,
          id: selectedDevice.id,
        });

        vscode.window.showInformationMessage(
          `Connected to physical device: ${selectedDevice.label}`
        );

        vscode.commands.executeCommand(
          "workbench.view.extension.emulatorContainer"
        );
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Error connecting to physical device: ${error.message}`
        );
      }
    }
  );

  // Refresh the emulator view
  let refreshEmulatorView = vscode.commands.registerCommand(
    "extension.refreshEmulatorView",
    () => {
      emulatorProvider.refresh();
    }
  );

  context.subscriptions.push(
    startAndroidEmulator,
    startIOSEmulator,
    connectToDevice,
    refreshEmulatorView
  );
}

function execPromise(
  command: string
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}

interface Device {
  type: "android" | "ios" | "android-physical";
  name: string;
  udid?: string;
  id?: string;
}

class EmulatorViewProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;
  private _timer?: NodeJS.Timeout;
  private _currentDevice?: Device;
  private _tempDir: string;

  constructor(private readonly _extensionContext: vscode.ExtensionContext) {
    this._tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "vscode-emulator-"));
  }

  public setCurrentDevice(device: Device) {
    this._currentDevice = device;
    this.refresh();
  }

  public refresh() {
    if (this._view) {
      this.startScreenshotCapture(this._view.webview);
    }
  }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionContext.extensionUri],
    };

    // Set HTML content for the emulator preview
    webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);

    // Start periodic screenshot capture if we have a device
    if (this._currentDevice) {
      this.startScreenshotCapture(webviewView.webview);
    }

    // Handle messages from the webview
    webviewView.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case "refresh":
            this.refresh();
            return;
          case "rotateDevice":
            this.rotateDevice();
            return;
          case "home":
            this.pressHome();
            return;
          case "back":
            this.pressBack();
            return;
          case "tap":
            this.sendTap(message.x, message.y);
            return;
        }
      },
      undefined,
      this._extensionContext.subscriptions
    );
  }

  private getHtmlForWebview(webview: vscode.Webview): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; script-src 'unsafe-inline'; style-src 'unsafe-inline';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emulator Live Preview</title>
  <style>
    html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #1e1e1e; color: #cccccc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
    .container { display: flex; flex-direction: column; height: 100%; }
    .toolbar { display: flex; padding: 8px; gap: 8px; background: #252526; border-bottom: 1px solid #3c3c3c; }
    .toolbar button { background: #0e639c; color: white; border: none; padding: 4px 8px; border-radius: 2px; cursor: pointer; }
    .toolbar button:hover { background: #1177bb; }
    .toolbar button:active { background: #0d5c8c; }
    .toolbar button:disabled { background: #5a5a5a; cursor: not-allowed; }
    .content { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; }
    #screenshot { max-width: 100%; max-height: 100%; object-fit: contain; }
    #loading, #no-device { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .spinner { border: 4px solid rgba(255, 255, 255, 0.3); border-radius: 50%; border-top: 4px solid #0e639c; width: 24px; height: 24px; animation: spin 1s linear infinite; margin: 0 auto 16px; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="container">
    <div class="toolbar">
      <button id="refreshBtn" title="Refresh">↻</button>
      <button id="rotateBtn" title="Rotate Device">⟳</button>
      <button id="homeBtn" title="Home">⌂</button>
      <button id="backBtn" title="Back">←</button>
    </div>
    <div class="content">
      <img id="screenshot" src="" alt="Emulator Screenshot" style="display: none;">
      <div id="loading" style="display: none;">
        <div class="spinner"></div>
        <div>Capturing screenshot...</div>
      </div>
      <div id="no-device">
        <div>No device connected</div>
        <div style="margin-top: 8px; font-size: 0.9em;">Use the commands below to connect:</div>
        <div style="margin-top: 8px; font-size: 0.8em; opacity: 0.7;">
          • Start Android Emulator<br>
          • Start iOS Simulator<br>
          • Connect to Physical Device
        </div>
      </div>
    </div>
  </div>
  <script>
    const vscode = acquireVsCodeApi();
    const screenshot = document.getElementById('screenshot');
    const loading = document.getElementById('loading');
    const noDevice = document.getElementById('no-device');
    const refreshBtn = document.getElementById('refreshBtn');
    const rotateBtn = document.getElementById('rotateBtn');
    const homeBtn = document.getElementById('homeBtn');
    const backBtn = document.getElementById('backBtn');
    
    let lastImageUpdate = 0;
    let captureTimeout = null;
    
    // Initialize UI state
    refreshBtn.addEventListener('click', () => {
      vscode.postMessage({ command: 'refresh' });
      showLoading();
    });
    
    rotateBtn.addEventListener('click', () => {
      vscode.postMessage({ command: 'rotateDevice' });
    });
    
    homeBtn.addEventListener('click', () => {
      vscode.postMessage({ command: 'home' });
    });
    
    backBtn.addEventListener('click', () => {
      vscode.postMessage({ command: 'back' });
    });
    
    screenshot.addEventListener('click', (event) => {
      const rect = screenshot.getBoundingClientRect();
      const x = (event.clientX - rect.left) / screenshot.clientWidth;
      const y = (event.clientY - rect.top) / screenshot.clientHeight;
      vscode.postMessage({ 
        command: 'tap',
        x: x,
        y: y
      });
    });
    
    function showLoading() {
      screenshot.style.display = 'none';
      loading.style.display = 'block';
      noDevice.style.display = 'none';
    }
    
    function showNoDevice() {
      screenshot.style.display = 'none';
      loading.style.display = 'none';
      noDevice.style.display = 'block';
    }
    
    function showScreenshot() {
      screenshot.style.display = 'block';
      loading.style.display = 'none';
      noDevice.style.display = 'none';
    }
    
    // Listen for messages from the extension
    window.addEventListener('message', event => {
      const message = event.data;
      switch (message.command) {
        case 'updateImage':
          lastImageUpdate = Date.now();
          screenshot.src = message.data;
          showScreenshot();
          break;
        case 'noDevice':
          showNoDevice();
          break;
        case 'startCapture':
          showLoading();
          break;
        case 'error':
          // TODO: Show error message
          console.error(message.error);
          if (Date.now() - lastImageUpdate > 5000) {
            showNoDevice();
          }
          break;
      }
    });
    
    // Initial state
    showNoDevice();
  </script>
</body>
</html>`;
  }

  private async startScreenshotCapture(webview: vscode.Webview) {
    if (this._timer) {
      clearInterval(this._timer);
    }

    if (!this._currentDevice) {
      webview.postMessage({ command: "noDevice" });
      return;
    }

    webview.postMessage({ command: "startCapture" });

    // Capture a screenshot every second
    this._timer = setInterval(async () => {
      try {
        if (!this._currentDevice) {
          return;
        }

        let imageBase64: string;

        if (
          this._currentDevice.type === "android" ||
          this._currentDevice.type === "android-physical"
        ) {
          // Use ADB to capture a screenshot from the Android emulator or physical device
          const { stdout } = await execBufferPromise(
            "adb exec-out screencap -p"
          );
          imageBase64 = stdout.toString("base64");
        } else if (
          this._currentDevice.type === "ios" &&
          this._currentDevice.udid
        ) {
          // Use simctl to capture a screenshot from the iOS simulator
          const screenshotPath = path.join(this._tempDir, "ios-screenshot.png");
          await execPromise(
            `xcrun simctl io ${this._currentDevice.udid} screenshot "${screenshotPath}"`
          );
          const imageBuffer = fs.readFileSync(screenshotPath);
          imageBase64 = imageBuffer.toString("base64");
        } else {
          throw new Error("Unsupported device type");
        }

        const dataUri = `data:image/png;base64,${imageBase64}`;
        // Send the new screenshot to the webview
        webview.postMessage({ command: "updateImage", data: dataUri });
      } catch (error: any) {
        console.error(`Error capturing screenshot: ${error.message}`);
        webview.postMessage({ command: "error", error: error.message });
      }
    }, 1000);
  }

  private async rotateDevice() {
    if (!this._currentDevice) {
      return;
    }

    try {
      if (
        this._currentDevice.type === "android" ||
        this._currentDevice.type === "android-physical"
      ) {
        await execPromise(
          "adb shell settings put system accelerometer_rotation 0"
        );
        // Get current rotation
        const { stdout } = await execPromise(
          "adb shell settings get system user_rotation"
        );
        const currentRotation = parseInt(stdout.trim(), 10);
        const newRotation = (currentRotation + 1) % 4;
        await execPromise(
          `adb shell settings put system user_rotation ${newRotation}`
        );
      } else if (
        this._currentDevice.type === "ios" &&
        this._currentDevice.udid
      ) {
        // iOS rotation is more complex and may require different approaches
        // This is a simple implementation that rotates between landscape and portrait
        await execPromise(
          `xcrun simctl orientation ${this._currentDevice.udid} ${
            Math.random() > 0.5 ? "landscape" : "portrait"
          }`
        );
      }
    } catch (error: any) {
      console.error(`Error rotating device: ${error.message}`);
    }
  }

  private async pressHome() {
    if (!this._currentDevice) {
      return;
    }

    try {
      if (
        this._currentDevice.type === "android" ||
        this._currentDevice.type === "android-physical"
      ) {
        await execPromise("adb shell input keyevent KEYCODE_HOME");
      } else if (
        this._currentDevice.type === "ios" &&
        this._currentDevice.udid
      ) {
        await execPromise(
          `xcrun simctl io ${this._currentDevice.udid} press home`
        );
      }
    } catch (error: any) {
      console.error(`Error pressing home: ${error.message}`);
    }
  }

  private async pressBack() {
    if (!this._currentDevice) {
      return;
    }

    try {
      if (
        this._currentDevice.type === "android" ||
        this._currentDevice.type === "android-physical"
      ) {
        await execPromise("adb shell input keyevent KEYCODE_BACK");
      } else if (
        this._currentDevice.type === "ios" &&
        this._currentDevice.udid
      ) {
        // iOS doesn't have a direct equivalent to Android's back button
        // Could try to simulate a swipe from left edge as an alternative
      }
    } catch (error: any) {
      console.error(`Error pressing back: ${error.message}`);
    }
  }

  private async sendTap(xRatio: number, yRatio: number) {
    if (!this._currentDevice) {
      return;
    }

    try {
      if (
        this._currentDevice.type === "android" ||
        this._currentDevice.type === "android-physical"
      ) {
        // Get screen dimensions
        const { stdout } = await execPromise("adb shell wm size");
        const match = stdout.match(/(\d+)x(\d+)/);
        if (match) {
          const width = parseInt(match[1], 10);
          const height = parseInt(match[2], 10);
          const x = Math.round(width * xRatio);
          const y = Math.round(height * yRatio);
          await execPromise(`adb shell input tap ${x} ${y}`);
        }
      } else if (
        this._currentDevice.type === "ios" &&
        this._currentDevice.udid
      ) {
        // For iOS, we need to determine the screen dimensions differently
        // This is a simplified approach
        const x = Math.round(xRatio * 100);
        const y = Math.round(yRatio * 100);
        await execPromise(
          `xcrun simctl io ${this._currentDevice.udid} tap ${x} ${y}`
        );
      }
    } catch (error: any) {
      console.error(`Error sending tap: ${error.message}`);
    }
  }

  public dispose() {
    if (this._timer) {
      clearInterval(this._timer);
    }

    try {
      // Clean up temp directory
      fs.rmSync(this._tempDir, { recursive: true, force: true });
    } catch (error) {
      console.error("Error cleaning up temp directory", error);
    }
  }
}

function execBufferPromise(
  command: string
): Promise<{ stdout: Buffer; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, { encoding: "buffer" }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr: stderr.toString() });
    });
  });
}

export function deactivate() {
  // Clean up any resources if needed
}
