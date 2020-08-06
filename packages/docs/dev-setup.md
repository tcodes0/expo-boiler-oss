# Dev setup

### 1 - Get the code

clone from `https://github.com/Thomazella/managed-expo-boiler.git`

### 2 - Install dependencies

run `yarn` at root.

if you don't have yarn, [install it](https://classic.yarnpkg.com/en/docs/install#mac-stable)

## Android

### 3.1 - Create an emulator

You can use the [AVD Manager feature of Android studio](https://developer.android.com/studio/run/managing-avds), or use the Android SDK direcly.

Launch your emulator.

If using Genymotion, run `adb connect <emulator ip>` ip is visible in window title bar

run `yarn app:android`, expo should launch the app

## iOS

### 3.2 - iOS Simulator

Install Xcode from App Store if you haven't already, make sure you have some simulators available. [See this](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device)

run `yarn app:ios`, expo should launch the simulator and the app

## Manually launching app

### 4 - In the terminal tab you used `yarn app`

press `a` to launch in Android or `i` to launch in iOS

press `?` for options

## Node version

Use any 10x, 12x or 14x version

```bash
expo-cli supports following Node.js versions:
* >=10.13.0 <11.0.0 (Maintenance LTS)
* >=12.13.0 <13.0.0 (Active LTS)
* >=14.0.0  <15.0.0 (Current Release)
```
