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
exports.createNewEmulator = createNewEmulator;
const vscode = __importStar(require("vscode"));
const https = __importStar(require("https"));
const xml2js = __importStar(require("xml2js"));
async function createNewEmulator() {
    // Category
    const categories = ["Phone", "Tablet"];
    const selectCategory = await vscode.window.showQuickPick(categories, {
        placeHolder: "Select category",
    });
    if (!selectCategory) {
        return;
    }
    // Hardware Profiles
    const hardwareProfiles = await fetchHardwareProfiles();
    if (!hardwareProfiles || hardwareProfiles.length === 0) {
        vscode.window.showErrorMessage("Failed to fetch hardware profiles");
        return;
    }
    const selectHardware = await vscode.window.showQuickPick(hardwareProfiles.map((profile) => profile.name), { placeHolder: "Select hardware" });
    if (!selectHardware) {
        return;
    }
    const selectedHardwareId = hardwareProfiles.find((profile) => profile.name === selectHardware)?.id;
    // System Image
    const systemImages = await fetchSystemImages();
    if (!systemImages || systemImages.length === 0) {
        vscode.window.showErrorMessage("Failed to fetch system images");
        return;
    }
    const systemImageCategories = ["Recommended", "x86 Images", "Other Images"];
    const selectedImageCategory = await vscode.window.showQuickPick(systemImageCategories, {
        placeHolder: "Select system image category",
    });
    if (!selectedImageCategory) {
        return;
    }
    const filteredImages = systemImages.filter((image) => image.category === selectedImageCategory);
    const selectedSystemImage = await vscode.window.showQuickPick(filteredImages.map((image) => image.displayName), { placeHolder: "Select system image" });
    // At this point you can use selectedHardwareId and selectedSystemImage as needed.
}
async function fetchHardwareProfiles() {
    const url = "https://dl.google.com/android/repository/hardware-profiles.xml";
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                xml2js.parseString(data, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        try {
                            const profiles = result["devices"]["hw-device"].map((device) => ({
                                id: device["id"][0],
                                name: device["name"][0],
                            }));
                            resolve(profiles);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                });
            });
        })
            .on("error", (err) => reject(err));
    });
}
async function fetchSystemImages() {
    const url = "https://dl.google.com/android/repository/repository2-1.xml";
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                xml2js.parseString(data, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        try {
                            const images = result["sdk:sdk-repository"]["remotePackage"].map((pkg) => {
                                const pkgPath = pkg["$"].path;
                                const category = pkgPath.includes("google_apis")
                                    ? "Recommended"
                                    : pkgPath.includes("x86")
                                        ? "x86 Images"
                                        : "Other Images";
                                const displayName = pkg["type-details"][0]["sdk:display-name"][0];
                                return { id: pkgPath, displayName, category };
                            });
                            resolve(images);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                });
            });
        })
            .on("error", (err) => reject(err));
    });
}
//# sourceMappingURL=androidManager.js.map