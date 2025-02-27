"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IosTreeItem = exports.IosTreeDataProvider = void 0;
const vscode = __importStar(require("vscode"));
const ios_1 = require("../core/ios");
class IosTreeDataProvider {
    _onDidChangeTreeData = new vscode.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    emulatorItems = [];
    context;
    constructor(context) {
        this.context = context;
    }
    getTreeItem(element) {
        return element;
    }
    async getChildren() {
        // Retrieve list of simulators from the ios core module
        const simulators = await (0, ios_1.getEmulatorList)();
        this.emulatorItems = simulators.map((simulator) => {
            const isRunning = (0, ios_1.checkEmulatorRunning)(simulator.name);
            return new IosTreeItem(simulator.name, simulator.id, isRunning);
        });
        return this.emulatorItems;
    }
    refresh(item) {
        this._onDidChangeTreeData.fire(item);
    }
    startSimulator(simulator) {
        if (!simulator.isRunning) {
            simulator.isRunning = true;
            simulator.contextValue = "emulatorRunning";
            (0, ios_1.startSimulator)(simulator.emulatorId).then(() => {
                // vscode.window.showInformationMessage(`Emulator ${simulator.label} started.`);
                this.refresh(simulator);
            });
        }
    }
    stopSimulator(simulator) {
        (0, ios_1.stopSimulator)(simulator.emulatorId).then(() => {
            simulator.isRunning = false;
            simulator.contextValue = "emulatorStopped";
            // vscode.window.showInformationMessage(`Emulator ${simulator.label} stopped.`);
            this.refresh(simulator);
        });
    }
}
exports.IosTreeDataProvider = IosTreeDataProvider;
class IosTreeItem extends vscode.TreeItem {
    label;
    emulatorId;
    isRunning;
    emulatorType;
    constructor(label, emulatorId, isRunning) {
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
exports.IosTreeItem = IosTreeItem;
//# sourceMappingURL=IosDataTreeView.js.map