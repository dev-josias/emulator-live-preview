import * as vscode from "vscode";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";
import WebSocket, { RawData, WebSocketServer } from "ws";

import crypto from "crypto";
import {
  getEmulatorList,
  checkEmulatorRunning,
  startEmulator,
  stopEmulator,
} from "../core/android";

interface DisplayConfiguration {
  width: number;
  height: number;
  display: number;
}

export class AndroidTreeDataProvider
  implements vscode.TreeDataProvider<AndroidTreeItem>
{
  private _onDidChangeTreeData = new vscode.EventEmitter<
    AndroidTreeItem | undefined
  >();
  readonly onDidChangeTreeData: vscode.Event<AndroidTreeItem | undefined> =
    this._onDidChangeTreeData.event;

  private emulatorItems: AndroidTreeItem[] = [];
  private emulatorResolution: { width: number; height: number } = {
    width: 0,
    height: 0,
  };
  private webviewPanels: Map<string, vscode.WebviewPanel> = new Map();

  private wssControl?: WebSocketServer;
  private wssStream?: WebSocketServer;
  private grpcClient: any = null;
  private stoppedFromTreeViewItem: boolean = false;
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  getTreeItem(element: AndroidTreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(): Promise<AndroidTreeItem[]> {
    const emulators: string[] = await getEmulatorList();
    this.emulatorItems = emulators.map((emulator) => {
      const isRunning = checkEmulatorRunning(emulator);
      return new AndroidTreeItem(emulator, isRunning);
    });
    return this.emulatorItems;
  }

  refresh(item?: AndroidTreeItem): void {
    this._onDidChangeTreeData.fire(item);
  }

  startEmulator(emulatorName: string): void {
    const emulator = this.emulatorItems.find(
      (item) => item.emulatorName === emulatorName
    );
    if (!emulator) {
      vscode.window.showErrorMessage(`Emulator ${emulatorName} not found.`);
      return;
    }
    if (!emulator.isRunning) {
      emulator.isRunning = true;
      emulator.contextValue = "emulatorRunning";
      startEmulator(emulatorName).then(() => {
        this.openWebview(emulator.emulatorName);
        this.startWebSocketServer();
        this.refresh(emulator);
      });
    }
  }

  stopEmulator(
    emulatorName: string,
    stoppedFromTreeViewItem: boolean = false
  ): void {
    this.stoppedFromTreeViewItem = stoppedFromTreeViewItem;
    const emulator = this.emulatorItems.find(
      (item) => item.emulatorName === emulatorName
    );
    if (!emulator) {
      vscode.window.showErrorMessage(`Emulator ${emulatorName} not found.`);
      return;
    }
    const panel = this.webviewPanels.get(emulatorName);
    if (panel) {
      panel.dispose();
      this.webviewPanels.delete(emulatorName);
    }
    if (this.grpcClient) {
      grpc.closeClient(this.grpcClient);
      this.grpcClient = null;
    }
    if (this.wssControl) {
      this.wssControl.close(() => {
        console.log("Device control connection closed");
        this.wssControl = undefined;
      });
    }
    if (this.wssStream) {
      this.wssStream.close(() => {
        console.log("Device connection closed");
        this.wssStream = undefined;
      });
    }
    stopEmulator(emulator.emulatorName).then(() => {
      emulator.isRunning = false;
      emulator.contextValue = "emulatorStopped";
      this.refresh(emulator);
    });
  }

  private startWebSocketServer(): void {
    if (!WebSocketServer || typeof WebSocketServer !== "function") {
      console.error("WebSocketServer is not properly defined");
      vscode.window.showErrorMessage("WebSocket server initialization failed");
      return;
    }

    this.wssStream = new WebSocketServer({ port: 5001 });
    console.log("WebSocket stream server started on port 5001");
    this.wssStream.on("listening", () =>
      console.log("WebSocket stream server listening")
    );
    this.wssStream.on("error", (err) =>
      console.error("WebSocket stream server error:", err)
    );
    this.wssStream.on("connection", (ws) =>
      console.log("Client connected to stream WebSocket")
    );

    this.wssControl = new WebSocketServer({ port: 5002 });
    console.log("WebSocket control server started on port 5002");
    this.wssControl.on("listening", () =>
      console.log("WebSocket control server listening")
    );
    this.wssControl.on("error", (err) =>
      console.error("WebSocket control server error:", err)
    );
    this.wssControl.on("connection", (ws) =>
      console.log("Client connected to control WebSocket")
    );

    // Set up gRPC
    const rootPath = path.join(__dirname, "..", "..");
    const PROTO_PATH = path.join(rootPath, "emulator_controller.proto");
    const GRPC_HOST = "127.0.0.1";
    const PORT = "8554";

    console.log(`Loading proto definition from: ${PROTO_PATH}`);
    try {
      const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });
      const emulatorProto = grpc.loadPackageDefinition(
        packageDefinition
      ) as any;

      console.log(
        `Attempting to connect to gRPC server at ${GRPC_HOST}:${PORT}`
      );
      this.grpcClient =
        new emulatorProto.android.emulation.control.EmulatorController(
          `${GRPC_HOST}:${PORT}`,
          grpc.credentials.createInsecure()
        );
      console.log("gRPC client created");

      // Start the connection retry logic
      this.retryGrpcConnection();
    } catch (error) {
      console.error("Error setting up gRPC client:", error);
      vscode.window.showErrorMessage(
        `Failed to set up gRPC client: ${(error as any).message}`
      );
    }
  }

  // Add a method to retry gRPC connection
  private retryGrpcConnection(attempt = 1, maxAttempts = 5): void {
    if (attempt > maxAttempts) {
      vscode.window.showErrorMessage(
        "Failed to connect to Android Emulator after multiple attempts"
      );
      return;
    }

    console.log(
      `Attempting gRPC connection (attempt ${attempt}/${maxAttempts})...`
    );

    // Try to get display configurations as a connection test
    this.grpcClient.getDisplayConfigurations(
      {},
      (err: any, response: { displays: DisplayConfiguration[] }) => {
        if (err) {
          console.error(`Error connecting (attempt ${attempt}):`, err);
          setTimeout(
            () => this.retryGrpcConnection(attempt + 1, maxAttempts),
            2000
          );
          return;
        }

        console.log("Successfully connected to Android Emulator gRPC server");

        // Now that we know the connection works, set up the display configuration
        const mainDisplay = response.displays.find(
          (display: DisplayConfiguration) => display.display === 0
        );
        if (mainDisplay) {
          this.emulatorResolution.width = mainDisplay.width;
          this.emulatorResolution.height = mainDisplay.height;
          console.log(
            `Emulator resolution: ${this.emulatorResolution.width}x${this.emulatorResolution.height}`
          );
        }

        // Set up the streaming and handling functions
        this.setupStreamAndHandlers();
      }
    );
  }

  // New method to contain the rest of the stream setup
  private setupStreamAndHandlers(): void {
    function calculateHash(buffer: Buffer): string {
      return crypto.createHash("sha256").update(buffer).digest("hex");
    }

    let latestImageBuffer: Buffer | null = null;
    let lastHash: string | null = null;

    const self = this;
    function getDeviceView(): void {
      const request = {
        format: "JPEG",
        width: 600,
        height: 1040,
        display: 0,
      };
      console.log("Starting screen streaming...");
      const call = self.grpcClient.streamScreenshot(request);
      call.on("data", async (image: { image: Buffer }) => {
        console.log("Received frame from emulator");
        const currentHash = calculateHash(image.image);
        if (currentHash !== lastHash) {
          lastHash = currentHash;
          latestImageBuffer = image.image;
          let clientCount = 0;
          self.wssStream?.clients.forEach((ws) => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(latestImageBuffer as Buffer);
              clientCount++;
            }
          });
          console.log(`Sent frame to ${clientCount} clients`);
        }
      });
      call.on("error", (err: any) => {
        console.error("Failed to get data from emulator:", err);
      });
      call.on("end", () => {
        console.log("Device view connection closed");
      });
    }
    getDeviceView();

    // Set up the WebSocket control handlers
    this.wssControl?.on("connection", (ws: WebSocket) => {
      console.log("New control connection established");
      ws.on("message", async (message: RawData) => {
        console.log("Received control message");
        try {
          const input = JSON.parse(message.toString());
          const touchEvent = JSON.parse(message.toString());

          switch (input.type) {
            case "keyboard":
              if (input.custom) {
                console.log(
                  `Sending custom key: ${JSON.stringify(input.data)}`
                );
                this.grpcClient.sendKey(input.data, (err: any) => {
                  if (err) {
                    console.error("Error sending custom input:", err);
                  }
                });
              } else {
                console.log(
                  `Sending keyboard input: ${input.key} (${input.keyCode}), isDown: ${input.isDown}`
                );
                this.grpcClient.sendKey(
                  {
                    keyCode: input.keyCode,
                    key: input.key,
                    eventType: input.isDown ? "keydown" : "keyup",
                  },
                  (err: any) => {
                    if (err) {
                      console.error("Error sending keyboard input:", err);
                    }
                  }
                );
              }
              break;
            default:
              console.log(
                `Sending touch event: ${JSON.stringify(touchEvent.touches)}`
              );
              this.handleTouchEvent(touchEvent);
              break;
          }
        } catch (error) {
          console.error("Error processing control message:", error);
        }
      });
      ws.on("close", () => {
        console.log("Control client disconnected");
      });
    });
  }

  private handleTouchEvent(event: any): void {
    try {
      const { touches, display } = event;
      if (display !== 0) {
        return;
      }
      const grpcTouches = touches.map((touch: any) => ({
        x: Math.round((touch.x / 360) * this.emulatorResolution.width),
        y: Math.round((touch.y / 800) * this.emulatorResolution.height),
        identifier: touch.identifier,
        pressure: touch.pressure,
        touch_major: touch.touch_major || 0,
        touch_minor: touch.touch_minor || 0,
        expiration: touch.expiration || 0,
      }));
      this.grpcClient.sendTouch(
        { touches: grpcTouches, display },
        (err: any, resp: any) => {
          if (err) {
            console.error("Failed to send touch event:", err);
          } else {
            console.log("Touch event sent successfully");
          }
        }
      );
    } catch (err) {
      console.error("Error processing touch event:", err);
    }
  }

  private openWebview(avdName: string): void {
    const panel = vscode.window.createWebviewPanel(
      "android-emulator",
      `Emulator: ${avdName}`,
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
      }
    );
    panel.webview.html = this.getWebviewContent();
    this.webviewPanels.set(avdName, panel);
    panel.webview.onDidReceiveMessage((message: any) => {
      if (message.command === "sendInput") {
        // Handle input from Webview if needed
        console.log("Received input from webview:", message);
      }
    });
    panel.onDidDispose(() => {
      console.log("Webview panel disposed");
      if (!this.stoppedFromTreeViewItem) {
        this.stopEmulator(avdName);
      }
    });
  }

  private getWebviewContent(): string {
    return /*html*/ `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
				<style>
					.material-symbols-outlined {
						font-size: 24px;
					}
				</style>
				<script src="https://cdn.tailwindcss.com"></script>
			</head>

			<body class="flex items-center justify-center min-h-screen">
				<div class="flex flex-col items-center space-y-4">
					<!-- Control Buttons -->
					<div class="flex items-center justify-center space-x-1.5 mb-1">
						<button data-key="AudioVolumeUp" data-key-code="24" title="Volume Up" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">volume_up</span>
            </button>
            <button data-key="AudioVolumeDown" data-key-code="25" title="Volume Down" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">volume_down</span>
            </button>
            <button data-key="PrintScreen" data-key-code="120" title="Take Screenshot" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">photo_camera</span>
            </button>
            <button data-key="GoBack" data-key-code="4" title="Back" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <button data-key="GoHome" data-key-code="3" title="Home" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">home</span>
            </button>
            <button data-key="AppSwitch" data-key-code="181" title="Overview" class="btn-controls flex items-center justify-center bg-stone-900 hover:bg-stone-950 p-2 rounded-lg text-sm text-gray-300">
							<span class="material-symbols-outlined">stack</span>
            </button>
					</div>

					<div class="bg-black rounded-xl overflow-hidden shadow-xl shadow-stone-950/50">
						<canvas id="emulatorCanvas" width="360" height="800"></canvas>
					</div>
          
          <!-- Connection Status -->
          <div id="connectionStatus" class="text-xs text-gray-500">Waiting for connection...</div>
				</div>
				
				<script>
					const vscode = acquireVsCodeApi();
					let wsStream;
					let wsControl;
					let isTouching = false;
					const canvas = document.getElementById('emulatorCanvas');
					const ctx = canvas.getContext('2d');
          const connectionStatus = document.getElementById('connectionStatus');
					renderLoadingMessage();
					
          function updateStatus(message) {
            connectionStatus.textContent = message;
            console.log(message);
          }
          
					function connectToStream() {
            updateStatus("Connecting to stream server...");
            if (wsStream) {
              wsStream.close();
            }
            
						wsStream = new WebSocket('ws://localhost:5001');
						wsStream.binaryType = 'arraybuffer';
						wsStream.onopen = () => {
							updateStatus("Stream connection established");
							wsStream.send('REQUEST_FRAME');
						}
						wsStream.onmessage = async (event) => {
							try {
                if (!connectionStatus.textContent.includes("receiving frames")) {
                  updateStatus("Connected and receiving frames");
                }
								const blob = new Blob([event.data], {
									type: 'image/jpeg'
								});
								const bitmap = await createImageBitmap(blob);
								requestAnimationFrame(() => {
									ctx.clearRect(0, 0, canvas.width, canvas.height);
									ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
								});
							} catch (err) {
								console.error('Error processing frame:', err);
                updateStatus("Error processing frame: " + err.message);
							}
						};
						wsStream.onclose = () => {
              updateStatus("Stream connection closed. Retrying in 3 seconds...");
              setTimeout(connectToStream, 3000);
            };
						wsStream.onerror = (err) => {
              console.error("Stream connection error:", err);
              updateStatus("Stream connection error. Retrying in 3 seconds...");
              setTimeout(connectToStream, 3000);
            };
					}
          
          function connectToControl() {
            updateStatus("Connecting to control server...");
            if (wsControl) {
              wsControl.close();
            }
            
						wsControl = new WebSocket('ws://localhost:5002');
						wsControl.onopen = () => {
							updateStatus("Control connection established");
						};
						wsControl.onclose = () => {
              updateStatus("Control connection closed. Retrying in 3 seconds...");
              setTimeout(connectToControl, 3000);
            };
						wsControl.onerror = (err) => {
              console.error("Control connection error:", err);
              updateStatus("Control connection error. Retrying in 3 seconds...");
              setTimeout(connectToControl, 3000);
            };
					}
          
          // Start connection attempts
          connectToStream();
          connectToControl();

					function sendTouchEvent(type, x, y) {
            if (wsControl && wsControl.readyState === WebSocket.OPEN) {
  						const touchEvent = JSON.stringify({
  							type,
  							touches: [{
  								x,
  								y,
  								identifier: 1,
  								pressure: (type === 'mouseup' || type === 'touchend' ? 0 : 50)
  							}],
  							display: 0
  						});
  						wsControl.send(touchEvent);
            } else {
              updateStatus("Control connection not ready");
            }
					}

					canvas.addEventListener('mousedown', (e) => {
						isTouching = true;
						const rect = canvas.getBoundingClientRect();
						const x = e.clientX - rect.left;
						const y = e.clientY - rect.top;
						sendTouchEvent('touchstart', x, y);
					});
					canvas.addEventListener('mousemove', (e) => {
						const rect = canvas.getBoundingClientRect();
						const x = e.clientX - rect.left;
						const y = e.clientY - rect.top;

						if (isTouching) {
							sendTouchEvent('touchmove', x, y);
						}
					});
					window.addEventListener('mouseup', (e) => {
						isTouching = false;
						const rect = canvas.getBoundingClientRect();
						const x = e.clientX - rect.left;
						const y = e.clientY - rect.top;
						sendTouchEvent('touchend', x, y);
					});
					canvas.addEventListener('touchstart', (e) => {
						isTouching = true;
						const rect = canvas.getBoundingClientRect();
						const touch = e.touches[0];
						const x = touch.clientX - rect.left;
						const y = touch.clientY - rect.top;
						sendTouchEvent('touchstart', x, y);
					});
					canvas.addEventListener('touchmove', (e) => {
						const rect = canvas.getBoundingClientRect();
						const touch = e.touches[0];
						const x = touch.clientX - rect.left;
						const y = touch.clientY - rect.top;
						sendTouchEvent('touchmove', x, y);
					});
					canvas.addEventListener('touchend', () => {
						isTouching = false;
						sendTouchEvent('touchend', 0, 0);
					});
					window.addEventListener('keydown', (event) => {
            if (wsControl && wsControl.readyState === WebSocket.OPEN) {
  						wsControl.send(JSON.stringify({
  							type: 'keyboard',
  							keyCode: event.keyCode,
  							key: event.key,
  							isDown: true
  						}));
            }
					});
					window.addEventListener('keyup', (event) => {
            if (wsControl && wsControl.readyState === WebSocket.OPEN) {
  						wsControl.send(JSON.stringify({
  							type: 'keyboard',
  							keyCode: event.keyCode,
  							key: event.key,
  							isDown: false
  						}));
            }
					});

					function sendCustomEvent(ev) {
            if (wsControl && wsControl.readyState === WebSocket.OPEN) {
						  wsControl.send(JSON.stringify(ev));
            } else {
              updateStatus("Control connection not ready");
            }
					}

					function renderLoadingMessage() {
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.fillStyle = 'white';
						ctx.font = '14px Arial';
						ctx.textAlign = 'center';
						ctx.textBaseline = 'middle';
						ctx.fillText('Waiting for emulator connection...', canvas.width / 2, canvas.height / 2);
					}

					var btnControls = document.querySelectorAll('.btn-controls');
					btnControls.forEach(btn => {
						var key = btn.getAttribute('data-key');
						var keyCode = btn.getAttribute('data-key-code');
						
						btn.addEventListener('mousedown', function() {
							sendKey(key, keyCode, 'keydown');
						});
						btn.addEventListener('mouseup', function() {
							sendKey(key, keyCode, 'keyup');
						});
					});

					function sendKey(key, keyCode, keyType) {
						var inputData = {
							type: 'keyboard',
							custom: true,
							data: {
								eventType: keyType,
								key: key,
								keyCode: parseInt(keyCode)
							}
						};
						sendCustomEvent(inputData);
					}
          
          // Send a message to VSCode when the webview is ready
          window.addEventListener('load', () => {
            vscode.postMessage({ command: 'webviewReady' });
          });
				</script>
			</body>
			</html>
		`;
  }
}

export class AndroidTreeItem extends vscode.TreeItem {
  emulatorName: string;
  isRunning: boolean;
  emulatorType: string;

  constructor(emulatorName: string, isRunning: boolean) {
    super(emulatorName, vscode.TreeItemCollapsibleState.None);
    this.emulatorName = emulatorName;
    this.isRunning = isRunning;
    this.tooltip = `Emulator: ${emulatorName}`;
    this.description = "";
    this.iconPath = new vscode.ThemeIcon("device-mobile");
    this.contextValue = isRunning ? "emulatorRunning" : "emulatorStopped";
    this.emulatorType = "android";
  }
}
