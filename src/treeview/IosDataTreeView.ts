import * as vscode from "vscode";
import {
  getEmulatorList,
  checkEmulatorRunning,
  startSimulator,
  stopSimulator,
} from "../core/ios";

export class IosTreeDataProvider
  implements vscode.TreeDataProvider<IosTreeItem>
{
  private _onDidChangeTreeData = new vscode.EventEmitter<
    IosTreeItem | undefined
  >();
  readonly onDidChangeTreeData: vscode.Event<IosTreeItem | undefined> =
    this._onDidChangeTreeData.event;

  private emulatorItems: IosTreeItem[] = [];
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  getTreeItem(element: IosTreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(): Promise<IosTreeItem[]> {
    // Retrieve list of simulators from the ios core module
    const simulators = await getEmulatorList();
    this.emulatorItems = simulators.map((simulator) => {
      const isRunning = checkEmulatorRunning(simulator.name);
      return new IosTreeItem(simulator.name, simulator.id, isRunning);
    });
    return this.emulatorItems;
  }

  refresh(item?: IosTreeItem): void {
    this._onDidChangeTreeData.fire(item);
  }

  startSimulator(simulator: IosTreeItem): void {
    if (!simulator.isRunning) {
      simulator.isRunning = true;
      simulator.contextValue = "emulatorRunning";
      startSimulator(simulator.emulatorId).then(() => {
        // vscode.window.showInformationMessage(`Emulator ${simulator.label} started.`);
        this.refresh(simulator);
      });
    }
  }

  stopSimulator(simulator: IosTreeItem): void {
    stopSimulator(simulator.emulatorId).then(() => {
      simulator.isRunning = false;
      simulator.contextValue = "emulatorStopped";
      // vscode.window.showInformationMessage(`Emulator ${simulator.label} stopped.`);
      this.refresh(simulator);
    });
  }
}

export class IosTreeItem extends vscode.TreeItem {
  public label: string;
  public emulatorId: string;
  public isRunning: boolean;
  public emulatorType: string;

  constructor(label: string, emulatorId: string, isRunning: boolean) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.label = label;
    this.emulatorId = emulatorId;
    this.isRunning = isRunning;
    this.tooltip = `Simulator: ${label}`;
    this.description = emulatorId;
    this.iconPath = new vscode.ThemeIcon("device-mobile");
    this.contextValue = isRunning ? "emulatorRunning" : "emulatorStopped";
    this.emulatorType = "ios";
  }
}
