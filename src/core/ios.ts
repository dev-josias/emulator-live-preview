import * as cp from "child_process";

export interface SimulatorDevice {
  name: string;
  id: string;
  state: string;
  platform: string;
}

/**
 * Fetch the list of iOS simulators.
 * @returns {Promise<SimulatorDevice[]>}
 */
export const getEmulatorList = (): Promise<SimulatorDevice[]> => {
  return new Promise((resolve, reject) => {
    cp.exec("xcrun simctl list devices", (error, stdout, stderr) => {
      if (error) {
        reject(
          new Error(
            `Failed to fetch simulator list: ${stderr || error.message}`
          )
        );
        return;
      }
      // Regular expression for platform header lines
      const platformRegex = /^-- (.+) --$/gm;
      // Regular expression for devices lines
      const deviceRegex =
        /^\s*(.+?) \(([^)]+)\) \((Booted|Shutdown|Unavailable)\)$/gm;
      const lines = stdout.split("\n");
      const devices: SimulatorDevice[] = [];
      let currentPlatform = "";

      for (const line of lines) {
        const trimmedLine = line.trim();
        const platformMatch = trimmedLine.match(/^-- (.+) --$/);
        if (platformMatch) {
          currentPlatform = platformMatch[1].trim();
          continue;
        }
        const deviceMatch = trimmedLine.match(
          /^\s*(.+?) \(([^)]+)\) \((Booted|Shutdown|Unavailable)\)$/
        );
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

/**
 * Check if a specific simulator is running.
 * @param emulatorName The name of the simulator to check.
 * @returns {boolean} True if the simulator is running, false otherwise.
 */
export const checkEmulatorRunning = (emulatorName: string): boolean => {
  try {
    // Run the command to list booted devices
    const result = cp.execSync("xcrun simctl list devices booted").toString();
    // Regular expression to match booted devices
    const bootedDeviceRegex = /^\s*([^()]+) \(([^)]+)\) \(Booted\)$/gm;
    let match: RegExpExecArray | null;
    while ((match = bootedDeviceRegex.exec(result)) !== null) {
      const [, name] = match;
      if (name.trim() === emulatorName) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error("Error checking emulator state:", error);
    return false;
  }
};

const openSimulatorApp = (): void => {
  cp.exec("open -a Simulator", (error, stdout, stderr) => {
    if (error) {
      console.error(`Failed to open simulator: ${stderr || error.message}`);
      return;
    }
  });
};

const showSimulatorUI = (uuid: string): void => {
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
export const startSimulator = (uuid: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const command = `xcrun simctl boot ${uuid}`;
      cp.exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(
            `Error starting the simulator: ${stderr || error.message}`
          );
          reject(
            new Error(`Failed to start simulator: ${stderr || error.message}`)
          );
          return;
        }
        console.log(`Simulator started successfully: ${stdout}`);
        openSimulatorApp();
        // Uncomment the following line if you wish to show the simulator UI automatically.
        // showSimulatorUI(uuid);
        resolve();
      });
    } catch (error) {
      console.error("Error starting simulator:", error);
      reject(new Error("Failed to start simulator due to an unknown error."));
    }
  });
};

/**
 * Stop the specified iOS simulator by UUID.
 * @param uuid The UUID of the simulator.
 * @returns {Promise<void>}
 */
export const stopSimulator = (uuid: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const command = `xcrun simctl shutdown ${uuid}`;
      cp.exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(
            `Error stopping the simulator: ${stderr || error.message}`
          );
          reject(
            new Error(`Failed to stop simulator: ${stderr || error.message}`)
          );
          return;
        }
        console.log(`Simulator "${uuid}" stopped successfully.`);
        resolve();
      });
    } catch (error) {
      console.error("Error stopping simulator:", error);
      reject(
        new Error(
          `Failed to stop simulator: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        )
      );
    }
  });
};
