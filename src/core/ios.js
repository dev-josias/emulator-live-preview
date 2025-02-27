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
exports.stopSimulator = exports.startSimulator = exports.checkEmulatorRunning = exports.getEmulatorList = void 0;
const cp = __importStar(require("child_process"));
/**
 * Fetch the list of iOS simulators.
 * @returns {Promise<SimulatorDevice[]>}
 */
const getEmulatorList = () => {
    return new Promise((resolve, reject) => {
        cp.exec("xcrun simctl list devices", (error, stdout, stderr) => {
            if (error) {
                reject(new Error(`Failed to fetch simulator list: ${stderr || error.message}`));
                return;
            }
            // Regular expression for platform header lines
            const platformRegex = /^-- (.+) --$/gm;
            // Regular expression for devices lines
            const deviceRegex = /^\s*(.+?) \(([^)]+)\) \((Booted|Shutdown|Unavailable)\)$/gm;
            const lines = stdout.split("\n");
            const devices = [];
            let currentPlatform = "";
            for (const line of lines) {
                const trimmedLine = line.trim();
                const platformMatch = trimmedLine.match(/^-- (.+) --$/);
                if (platformMatch) {
                    currentPlatform = platformMatch[1].trim();
                    continue;
                }
                const deviceMatch = trimmedLine.match(/^\s*(.+?) \(([^)]+)\) \((Booted|Shutdown|Unavailable)\)$/);
                if (deviceMatch) {
                    const [, name, id, state] = deviceMatch;
                    devices.push({
                        name: name.trim(),
                        id: id.trim(),
                        state: state.trim(),
                        platform: currentPlatform,
                    });
                }
            }
            resolve(devices);
        });
    });
};
exports.getEmulatorList = getEmulatorList;
/**
 * Check if a specific simulator is running.
 * @param emulatorName The name of the simulator to check.
 * @returns {boolean} True if the simulator is running, false otherwise.
 */
const checkEmulatorRunning = (emulatorName) => {
    try {
        // Run the command to list booted devices
        const result = cp.execSync("xcrun simctl list devices booted").toString();
        // Regular expression to match booted devices
        const bootedDeviceRegex = /^\s*([^()]+) \(([^)]+)\) \(Booted\)$/gm;
        let match;
        while ((match = bootedDeviceRegex.exec(result)) !== null) {
            const [, name] = match;
            if (name.trim() === emulatorName) {
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.error("Error checking emulator state:", error);
        return false;
    }
};
exports.checkEmulatorRunning = checkEmulatorRunning;
const openSimulatorApp = () => {
    cp.exec("open -a Simulator", (error, stdout, stderr) => {
        if (error) {
            console.error(`Failed to open simulator: ${stderr || error.message}`);
            return;
        }
    });
};
const showSimulatorUI = (uuid) => {
    cp.exec(`xcrun simctl ui ${uuid} show`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Failed to show Simulator UI: ${stderr || error.message}`);
            return;
        }
        console.log("Simulator UI shown successfully");
    });
};
/**
 * Start the specified iOS simulator by UUID.
 * @param uuid The UUID of the simulator.
 * @returns {Promise<void>}
 */
const startSimulator = (uuid) => {
    return new Promise((resolve, reject) => {
        try {
            const command = `xcrun simctl boot ${uuid}`;
            cp.exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error starting the simulator: ${stderr || error.message}`);
                    reject(new Error(`Failed to start simulator: ${stderr || error.message}`));
                    return;
                }
                console.log(`Simulator started successfully: ${stdout}`);
                openSimulatorApp();
                // Uncomment the following line if you wish to show the simulator UI automatically.
                // showSimulatorUI(uuid);
                resolve();
            });
        }
        catch (error) {
            console.error("Error starting simulator:", error);
            reject(new Error("Failed to start simulator due to an unknown error."));
        }
    });
};
exports.startSimulator = startSimulator;
/**
 * Stop the specified iOS simulator by UUID.
 * @param uuid The UUID of the simulator.
 * @returns {Promise<void>}
 */
const stopSimulator = (uuid) => {
    return new Promise((resolve, reject) => {
        try {
            const command = `xcrun simctl shutdown ${uuid}`;
            cp.exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error stopping the simulator: ${stderr || error.message}`);
                    reject(new Error(`Failed to stop simulator: ${stderr || error.message}`));
                    return;
                }
                console.log(`Simulator "${uuid}" stopped successfully.`);
                resolve();
            });
        }
        catch (error) {
            console.error("Error stopping simulator:", error);
            reject(new Error(`Failed to stop simulator: ${error instanceof Error ? error.message : "Unknown error"}`));
        }
    });
};
exports.stopSimulator = stopSimulator;
//# sourceMappingURL=ios.js.map