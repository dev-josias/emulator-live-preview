import * as os from "os";
import * as cp from "child_process";
import * as path from "path";
import * as vscode from "vscode";

async function promptForCmdLineToolsPath(): Promise<void> {
  const choice = await vscode.window.showInformationMessage(
    "Choose a folder for Android SDK",
    "Choose Folder"
  );
  if (choice === "Choose Folder") {
    const folderUri = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      openLabel: "Select a SDK folder",
    });
    if (folderUri && folderUri.length > 0) {
      const selectedPath = folderUri[0].fsPath;
      const config = vscode.workspace.getConfiguration("emulator-live-preview");
      await config.update(
        "sdkPath",
        selectedPath,
        vscode.ConfigurationTarget.Global
      );
      vscode.window.showInformationMessage(
        "SDK path has been set, please restart vscode to take effect."
      );
    }
  }
}

const getSdkManagerPath = (): string => {
  const sdkRoot = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
  if (!sdkRoot) {
    const config = vscode.workspace.getConfiguration("emulator-live-preview");
    const sdkPath = config.get<string>("sdkPath");
    if (!sdkPath) {
      promptForCmdLineToolsPath();
      return "";
    }
    return sdkPath;
  }
  return sdkRoot;
};

const getAdbPath = (): string => {
  const sdkRoot = getSdkManagerPath();
  if (!sdkRoot) {
    return "";
  }
  const isWindows = os.platform() === "win32";
  return isWindows
    ? path.join(sdkRoot, "platform-tools", "adb.exe")
    : path.join(sdkRoot, "platform-tools", "adb");
};

export const getEmulatorPath = (): string => {
  const sdkRoot = getSdkManagerPath();
  if (!sdkRoot) {
    return "";
  }
  const isWindows = os.platform() === "win32";
  return isWindows
    ? path.join(sdkRoot, "emulator", "emulator.exe")
    : path.join(sdkRoot, "emulator", "emulator");
};

export const getEmulatorList = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const emulatorPath = getEmulatorPath();
    if (emulatorPath) {
      cp.exec(
        `${emulatorPath} -list-avds`,
        (error: cp.ExecException | null, stdout: string) => {
          if (error) {
            vscode.window.showErrorMessage(
              `Error getting emulator list: ${error.message}`
            );
            reject([]);
            return;
          }
          const emulators: string[] = [];
          const lines = stdout.split("\n").filter(Boolean);
          lines.forEach((line) => {
            emulators.push(line.trim());
          });
          resolve(emulators);
        }
      );
    } else {
      vscode.window.showErrorMessage(
        "ANDROID_HOME or ANDROID_SDK_ROOT not found. Please set up your Android development environment."
      );
      reject([]);
    }
  });
};

export const startEmulator = (emulatorName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const emulatorPath = getEmulatorPath();
    // Spawn the emulator process with appropriate arguments
    const emulatorProcess = cp.spawn(
      emulatorPath,
      [
        "-avd",
        emulatorName,
        "-netdelay",
        "none",
        "-netspeed",
        "full",
        "-qt-hide-window",
        "-grpc",
        "8554",
      ],
      { shell: true } // Necessary for Windows environment to recognize the executable
    );
    // Listen for any errors while starting the emulator
    emulatorProcess.on("error", (err: Error) => {
      reject(`Failed to start emulator: ${err.message}`);
    });
    // Log when the emulator process spawns successfully
    emulatorProcess.on("spawn", () => {
      console.log(`Emulator ${emulatorName} started successfully.`);
      // vscode.window.showInformationMessage(`Emulator ${emulatorName} started successfully.`);
    });
    // Resolve the promise when the emulator output data indicates that it has started
    emulatorProcess.stdout?.on("data", (data: Buffer) => {
      if (data.toString().includes("Started GRPC server at")) {
        resolve();
      }
    });
    // Optionally, handle process exit for additional cleanup
    emulatorProcess.on("exit", (code: number | null) => {
      if (code !== 0) {
        console.error(`Emulator exited with code ${code}`);
      }
    });
  });
};

export const stopEmulator = (emulatorName: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const adbPath = getAdbPath();
    try {
      // Run `adb devices` to get the list of running emulators
      const result = cp.execSync(`${adbPath} devices`, { encoding: "utf-8" });
      const lines = result.split("\n");
      // Find the emulator matching the given name
      const emulatorPort = lines
        .map((line) => line.match(/^emulator-(\d+)\s+device\r?$/))
        .filter(Boolean)
        .map((match) => match && match[1])
        .find((port) => {
          try {
            // Verify the emulator name using `adb -s emulator-<port> emu avd name`
            const rawName = cp.execSync(
              `${adbPath} -s emulator-${port} emu avd name`,
              { encoding: "utf-8" }
            );
            let avdName = rawName.split("\r")[0];
            avdName = avdName.replace("OK", "").trim();
            return avdName === emulatorName;
          } catch {
            return false;
          }
        });
      if (!emulatorPort) {
        vscode.window.showErrorMessage(
          `Emulator "${emulatorName}" is not running.`
        );
        reject(`Failed to find emulator "${emulatorName}".`);
        return;
      }
      // Stop the emulator using the discovered port
      cp.execSync(`${adbPath} -s emulator-${emulatorPort} emu kill`, {
        encoding: "utf-8",
      });
      // vscode.window.showInformationMessage(`Emulator "${emulatorName}" has been stopped.`);
      resolve();
    } catch (error) {
      console.error(`Error stopping emulator "${emulatorName}":`, error);
      vscode.window.showErrorMessage(
        `Failed to stop emulator "${emulatorName}".`
      );
      reject(`Failed to stop emulator "${emulatorName}".`);
    }
  });
};

export const checkEmulatorRunning = (emulatorName: string): boolean => {
  const adbPath = getAdbPath();
  try {
    const result = cp.execSync(`${adbPath} devices`, { encoding: "utf8" });
    return result.includes(emulatorName);
  } catch (error) {
    console.log("Error checking emulator status:", error);
    return false;
  }
};
