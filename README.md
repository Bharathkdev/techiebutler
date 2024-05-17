# Techiebutler React Native Posts Application

Welcome to the **Techiebutler** repository! This README provides instructions on how to clone, set up, and run the Techiebutler React Native Posts application on your local development environment.

<img width="352" alt="Screenshot 2024-05-17 at 8 17 39 PM" src="https://github.com/Bharathkdev/techiebutler/assets/46343966/2fa0a9c5-348d-4850-983a-22b68ac2fcb3">

## Features

- Added a Home Loader animation.
- Implemented reusable components(following DRY): Post card, Label, Safe Area and Linear Gradient.
- Utilized Redux Toolkit with Saga for API handling and state management.
- Defined global theme and strings.
- Integrated navigation using React Navigation.
- Included pagination support on the Home screen.
- Implemented pull-to-refresh functionality.
- Designed a sleek UI.
- Utilized TypeScript for type safety.
- Optimized performance with hooks like useCallback and React.memo(HOC) and performance-optimized FlatList using props like getItemLayout, removeClippedSubviews, initialNumToRender, maxToRenderPerBatch.

## Prerequisites

Before you begin, ensure you have met the following requirements:

**Environment setup**: https://reactnative.dev/docs/environment-setup

## Clone the Repository

First, clone this repository to your local machine using Git:

```
git clone https://github.com/Bharathkdev/techiebutler.git
```

## Navigate to the techiebutler Folder

Change your working directory to the techiebutler folder:

```
cd techiebutler/
```

## Install Dependencies

You can use npm or yarn to install the project dependencies.

### Using Yarn:

```
yarn install
``` 

### Using npm:

```
npm install
```

## iOS Specific Steps

### Install iOS Dependencies

Before running the app on an iOS simulator or device, you'll need to install iOS dependencies using CocoaPods. Run the following commands:

```
cd ios/
pod install
```

This will install the required dependencies for the iOS portion of your app.

## Running the App

You can run the application on either an Android or iOS emulator, or on a physical device if it's connected to your development machine.

### Android

To run the app on an Android emulator or device, use one of the following commands:

### Using Yarn:

```
yarn android
```

### Using React Native CLI:

```
npx react-native run-android
```

### iOS

To run the app on an iOS simulator or device, use one of the following commands:

### Using Yarn:

```
yarn ios
```

### Using React Native CLI:

```
npx react-native run-ios
```
## Troubleshooting

If you face any error while installing pods using pod install make sure your pod version is up-to-date. Run the following command:

```
cd ios/
pod install --repo-update
```
