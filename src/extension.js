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
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const os = __importStar(require("os"));
const AndroidDataTreeView_1 = require("./treeview/AndroidDataTreeView");
const IosDataTreeView_1 = require("./treeview/IosDataTreeView");
function activate(context) {
    const androidProvider = new AndroidDataTreeView_1.AndroidTreeDataProvider(context);
    let iosProvider = null;
    vscode.window.createTreeView("emulators-android", {
        treeDataProvider: androidProvider,
        showCollapseAll: true,
    });
    if (os.platform() === "darwin") {
        iosProvider = new IosDataTreeView_1.IosTreeDataProvider(context);
        vscode.window.createTreeView("emulators-ios", {
            treeDataProvider: iosProvider,
            showCollapseAll: true,
        });
    }
    context.subscriptions.push(vscode.commands.registerCommand("emulator-live-preview.start", (emulator) => {
        if (emulator instanceof AndroidDataTreeView_1.AndroidTreeItem) {
            androidProvider.startEmulator(emulator.emulatorName);
        }
        else {
            iosProvider?.startSimulator(emulator);
        }
    }), vscode.commands.registerCommand("emulator-live-preview.stop", (emulator) => {
        if (emulator instanceof AndroidDataTreeView_1.AndroidTreeItem) {
            androidProvider.stopEmulator(emulator.emulatorName, true);
        }
        else {
            iosProvider?.stopSimulator(emulator);
        }
    }), vscode.commands.registerCommand("emulator-live-preview.refresh-android", () => {
        androidProvider.refresh();
    }), vscode.commands.registerCommand("emulator-live-preview.refresh-ios", () => {
        iosProvider?.refresh();
    }));
}
function deactivate() {
    // Cleanup if necessary
}
//# sourceMappingURL=extension.js.map