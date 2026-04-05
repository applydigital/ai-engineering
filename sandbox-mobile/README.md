# AI Engineering Sandbox Mobile - Art Bidding App

Sandbox application for AI engineering experimentation.

The sandbox mobile app is a lightweight art auction app built with Expo React Native and TypeScript.

Current functionality is deliberately limited; users submit a bid and if the bid is higher than the existing bid it is accepted.

## Tech Stack

- **Framework:** Expo SDK 54
- **Language:** TypeScript 5.9.x
- **Routing:** Expo Router 6
- **UI Runtime:** React 19.1 + React Native 0.81.5
- **Images:** expo-image
- **Testing:** Jest 29 + jest-expo + React Native Testing Library
- **Linting:** ESLint (eslint-config-expo)

## Prerequisites

This project has strict engine requirements:

- **Node.js:** >= 20.19.5
- **npm:** >= 10.8.2
- **Xcode + iOS Simulator** (for iOS development)
- **Android Studio Emulator** (for Android development)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-engineering

# Enter mobile sandbox
cd sandbox-mobile

# Install dependencies
npm install
```

## NPM Scripts

```bash
# Start Expo dev server
npm run start

# Launch iOS simulator
npm run ios

# Launch Android emulator
npm run android

# Lint code with ESLint
npm run lint

# Run tests
npm run test
```

## Project Structure

```text
sandbox-mobile/
├── app/
│   ├── _layout.tsx                # Root app layout
│   └── index.tsx                  # Main auction screen
├── assets/
│   ├── art/                       # Auction artwork images
│   └── images/                    # App icons/splash assets
├── components/
│   ├── ArtworkImage/
│   │   ├── ArtworkImage.tsx
│   │   ├── ArtworkImage.test.tsx
│   │   └── index.ts
│   ├── BidForm/
│   │   ├── BidForm.tsx
│   │   ├── BidForm.test.tsx
│   │   └── index.ts
│   ├── BidTicker/
│   │   ├── BidTicker.tsx
│   │   ├── BidTicker.test.tsx
│   │   └── index.ts
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.test.tsx
│       │   └── index.ts
│       └── NumberField/
│           ├── NumberField.tsx
│           ├── NumberField.test.tsx
│           └── index.ts
├── data/
│   └── artImages.ts               # Artwork index data
├── hooks/
│   ├── useBidding/
│   │   ├── useBidding.ts
│   │   ├── useBidding.test.ts
│   │   └── index.ts
│   └── useRandomArt/
│       ├── useRandomArt.ts
│       ├── useRandomArt.test.ts
│       └── index.ts
├── test/
│   └── setup.ts                   # Jest setup/mocks
├── app.json
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## Feature Folder Convention

Features are organized by folder with colocated source and tests:

- `FeatureName/FeatureName.tsx` or `FeatureName/useFeature.ts`
- `FeatureName/FeatureName.test.tsx` or `FeatureName/useFeature.test.ts`
- `FeatureName/index.ts` as a stable export surface

This keeps implementation and tests together while preserving clean imports (for example `@/components/BidForm`).

## Development Workflow

### Running the Application

Start the mobile app with one of the following commands:

```bash
npm run ios
```

or

```bash
npm run android
```

You can also run `npm run start` to open Expo CLI and choose a target manually.

### Testing

The mobile app uses:

- Jest (`jest-expo` preset)
- React Native Testing Library

Run the test suite via:

```bash
npm run test
```

### Code Quality

ESLint is configured through Expo's recommended setup and provides fast feedback on code quality issues.

```bash
npm run lint
```

## Key Features

### Bidding System

The application uses a custom `useBidding` hook to manage:

- Current bid state
- Minimum valid bid calculation
- Bid acceptance (only higher bids are accepted)

### Random Artwork Selection

The `useRandomArt` hook selects an artwork for the session from the local image list, creating a dynamic auction experience on launch.
