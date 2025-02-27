# Emulator Live Preview

**Emulator Live Preview** is a Visual Studio Code extension that seamlessly docks Android and iOS emulators directly within your VS Code workspace. Enjoy real‑time screen streaming and interactive controls so you can develop, test, and debug your mobile applications without ever leaving the editor. Future updates will also support mirroring of physical devices.

## Features

- **Real-Time Streaming:**  
  Live, low-latency streaming of your Android emulator or iOS simulator directly into an editor tab. Watch your app’s changes in real time as you code.

- **Interactive Controls:**  
  Use intuitive floating controls to perform common actions such as:

  - **Rotate:** Change device orientation.
  - **Volume Up/Down:** Adjust the device volume.
  - **Power:** Simulate power button presses.
  - And more — all designed to mimic physical device interactions.

- **Device Management:**  
  Automatically detect running emulators (and eventually physical devices) and display them in a dedicated tree view. Easily start and stop devices with a single click.

- **Multi-Platform Support:**
  - **Android:** Full support on all platforms with auto‑detection of ADB and scrcpy for physical device mirroring.
  - **iOS:** Simulator support is available on macOS (requires Xcode).
  - **Manual Configuration:** Override auto‑detected paths via settings if needed.

## Requirements

- **Android:**

  - Android SDK with ADB installed (or configured via settings).
  - For physical device mirroring, ensure USB debugging is enabled on your device.

- **iOS:**

  - macOS with Xcode installed (only the iOS Simulator is supported for now).

- **General:**
  - Visual Studio Code (version 1.60.0 or later)
  - Node.js (for development)

## Extension Settings

This extension contributes the following settings:

- **`emulator-live-preview.androidSdkPath`**  
  _Type:_ `string`  
  _Default:_ `""`  
  _Description:_ Path to your Android SDK. Auto-detected if not set.

- **`emulator-live-preview.iosSimulatorPath`**  
  _Type:_ `string`  
  _Default:_ `/Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`  
  _Description:_ Path to the iOS Simulator application.

- **`emulator-live-preview.adbPath`**  
  _Type:_ `string`  
  _Default:_ `""`  
  _Description:_ Custom path to the ADB executable. If empty, the extension will auto-detect it.

- **`emulator-live-preview.streamQuality`**  
  _Type:_ `number`  
  _Default:_ `80`  
  _Description:_ Streaming quality percentage (80–100 recommended).

## Known Issues

- **iOS Streaming Limitations:**  
  Due to Apple’s restrictions, iOS Simulator streaming is achieved via periodic screenshots (which may have a lower frame rate). Physical iOS device mirroring is not yet supported.

- **gRPC Streaming:**  
  The gRPC-based streaming for Android emulators is experimental. In some environments, you may need to adjust emulator flags or update SDK tools.

- **Performance:**  
  Running multiple high-resolution streams simultaneously may increase CPU usage. We recommend testing with a single stream if performance issues occur.

## Release Notes

### 0.0.1

- Initial release of Emulator Live Preview.
- Real-time streaming and interactive controls for Android emulators and iOS simulators.
- Auto-detection and manual configuration of Android SDK/ADB paths.
- Integrated device management tree view.
- Basic support for physical Android device mirroring (via scrcpy, coming in future updates).

## Additional Information

For more details and troubleshooting, please refer to:

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- [Issues and Feature Requests](https://github.com/mimshak/emulator-live-preview/issues)

**Enjoy a seamless mobile development experience directly from your editor!**
