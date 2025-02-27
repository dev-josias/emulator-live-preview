import * as vscode from "vscode";
import * as https from "https";
import * as xml2js from "xml2js";

interface HardwareProfile {
  id: string;
  name: string;
}

interface SystemImage {
  id: string;
  displayName: string;
  category: string;
}

export async function createNewEmulator(): Promise<void> {
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
  const selectHardware = await vscode.window.showQuickPick(
    hardwareProfiles.map((profile) => profile.name),
    { placeHolder: "Select hardware" }
  );
  if (!selectHardware) {
    return;
  }
  const selectedHardwareId = hardwareProfiles.find(
    (profile) => profile.name === selectHardware
  )?.id;
  // System Image
  const systemImages = await fetchSystemImages();
  if (!systemImages || systemImages.length === 0) {
    vscode.window.showErrorMessage("Failed to fetch system images");
    return;
  }
  const systemImageCategories = ["Recommended", "x86 Images", "Other Images"];
  const selectedImageCategory = await vscode.window.showQuickPick(
    systemImageCategories,
    {
      placeHolder: "Select system image category",
    }
  );
  if (!selectedImageCategory) {
    return;
  }
  const filteredImages = systemImages.filter(
    (image) => image.category === selectedImageCategory
  );
  const selectedSystemImage = await vscode.window.showQuickPick(
    filteredImages.map((image) => image.displayName),
    { placeHolder: "Select system image" }
  );
  // At this point you can use selectedHardwareId and selectedSystemImage as needed.
}

async function fetchHardwareProfiles(): Promise<HardwareProfile[]> {
  const url = "https://dl.google.com/android/repository/hardware-profiles.xml";
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          xml2js.parseString(data, (err: Error | null, result: any) => {
            if (err) {
              reject(err);
            } else {
              try {
                const profiles: HardwareProfile[] = result["devices"][
                  "hw-device"
                ].map((device: any) => ({
                  id: device["id"][0],
                  name: device["name"][0],
                }));
                resolve(profiles);
              } catch (e) {
                reject(e);
              }
            }
          });
        });
      })
      .on("error", (err) => reject(err));
  });
}

async function fetchSystemImages(): Promise<SystemImage[]> {
  const url = "https://dl.google.com/android/repository/repository2-1.xml";
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          xml2js.parseString(data, (err: Error | null, result: any) => {
            if (err) {
              reject(err);
            } else {
              try {
                const images: SystemImage[] = result["sdk:sdk-repository"][
                  "remotePackage"
                ].map((pkg: any) => {
                  const pkgPath: string = pkg["$"].path;
                  const category = pkgPath.includes("google_apis")
                    ? "Recommended"
                    : pkgPath.includes("x86")
                    ? "x86 Images"
                    : "Other Images";
                  const displayName: string =
                    pkg["type-details"][0]["sdk:display-name"][0];
                  return { id: pkgPath, displayName, category };
                });
                resolve(images);
              } catch (e) {
                reject(e);
              }
            }
          });
        });
      })
      .on("error", (err) => reject(err));
  });
}
