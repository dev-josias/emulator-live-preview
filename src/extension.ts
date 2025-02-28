import * as vscode from "vscode";
import * as os from "os";
import {
  AndroidTreeDataProvider,
  AndroidTreeItem,
} from "./treeview/AndroidDataTreeView";
import { IosTreeDataProvider } from "./treeview/IosDataTreeView";

export function activate(context: vscode.ExtensionContext): void {
  const androidProvider = new AndroidTreeDataProvider(context);
  let iosProvider: IosTreeDataProvider | null = null;

  vscode.window.createTreeView("emulator-live-preview-android", {
    treeDataProvider: androidProvider,
    showCollapseAll: true,
  });

  if (os.platform() === "darwin") {
    iosProvider = new IosTreeDataProvider(context);
    vscode.window.createTreeView("emulator-live-preview-ios", {
      treeDataProvider: iosProvider,
      showCollapseAll: true,
    });
  }

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "emulator-live-preview.launchEmulator",
      (emulator: any) => {
        if (emulator instanceof AndroidTreeItem) {
          androidProvider.startEmulator(emulator.emulatorName);
        } else {
          iosProvider?.startSimulator(emulator);
        }
      }
    ),
    vscode.commands.registerCommand(
      "emulator-live-preview.stopEmulator",
      (emulator: any) => {
        if (emulator instanceof AndroidTreeItem) {
          androidProvider.stopEmulator(emulator.emulatorName, true);
        } else {
          iosProvider?.stopSimulator(emulator);
        }
      }
    ),
    vscode.commands.registerCommand(
      "emulator-live-preview.refresh-android",
      () => {
        androidProvider.refresh();
      }
    ),
    vscode.commands.registerCommand("emulator-live-preview.refresh-ios", () => {
      iosProvider?.refresh();
    })
  );
}

export function deactivate(): void {
  // Cleanup if necessary
}
