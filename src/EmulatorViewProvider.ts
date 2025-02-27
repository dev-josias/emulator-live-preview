import * as vscode from "vscode";

export class EmulatorViewProvider implements vscode.WebviewViewProvider {
  context: vscode.ExtensionContext;
  private _view?: vscode.WebviewView;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    token: vscode.CancellationToken
  ): void {
    this._view = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri],
    };
    webviewView.webview.html = this.getWebviewContent();
  }

  private getWebviewContent(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Emulator</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #1e1e1e;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          canvas {
            border: 1px solid #333;
            width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <canvas id="emulatorCanvas" width="360" height="640"></canvas>
        <script>
          const vscode = acquireVsCodeApi();
          // Implement WebSocket for the emulator here.
          // Add streaming and control logic as needed.
        </script>
      </body>
      </html>
    `;
  }
}
