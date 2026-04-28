## 1. useArtworkTimer Hook

- [x] 1.1 Create `sandbox-mobile/hooks/useArtworkTimer/useArtworkTimer.ts` with 60-second countdown, `onRotate` callback, and auto-reset at zero
- [x] 1.2 Create `sandbox-mobile/hooks/useArtworkTimer/index.ts` barrel export
- [x] 1.3 Write `sandbox-mobile/hooks/useArtworkTimer/useArtworkTimer.test.ts` covering decrement, reset function, and onRotate callback at zero
- [x] 1.4 Create `sandbox/src/hooks/useArtworkTimer.ts` (web version, same logic)
- [x] 1.5 Export `useArtworkTimer` from `sandbox/src/hooks/index.ts`

## 2. Timer Display Component

- [x] 2.1 Create `sandbox-mobile/components/Timer/Timer.tsx` accepting `timeRemaining: number`, rendering `mm:ss`
- [x] 2.2 Create `sandbox-mobile/components/Timer/index.ts` barrel export
- [x] 2.3 Write `sandbox-mobile/components/Timer/Timer.test.tsx` covering 00:45, 01:00, and 00:00 scenarios
- [x] 2.4 Create `sandbox/src/components/atoms/AtTimer/AtTimer.tsx` (web version)
- [x] 2.5 Create `sandbox/src/components/atoms/AtTimer/index.ts` barrel export
- [x] 2.6 Write `sandbox/src/components/atoms/AtTimer/AtTimer.test.tsx`
- [x] 2.7 Export `AtTimer` from `sandbox/src/components/atoms/index.ts`

## 3. BidInfo Wrapper Component

- [x] 3.1 Create `sandbox-mobile/components/BidInfo/BidInfo.tsx` composing `BidTicker` and `Timer` with `bid` and `timeRemaining` props
- [x] 3.2 Create `sandbox-mobile/components/BidInfo/index.ts` barrel export
- [x] 3.3 Write `sandbox-mobile/components/BidInfo/BidInfo.test.tsx` verifying both child components render with correct props
- [x] 3.4 Create `sandbox/src/components/molecules/MlBidInfo/MlBidInfo.tsx` composing `AtBidTicker` and `AtTimer` with optional `className` prop
- [x] 3.5 Create `sandbox/src/components/molecules/MlBidInfo/index.ts` barrel export
- [x] 3.6 Write `sandbox/src/components/molecules/MlBidInfo/MlBidInfo.test.tsx`
- [x] 3.7 Export `MlBidInfo` from `sandbox/src/components/molecules/index.ts`

## 4. Wire Up in App Screens

- [x] 4.1 Update `sandbox-mobile/app/index.tsx` to use `useArtworkTimer` (wiring `onRotate` to re-pick artwork) and replace `BidTicker` with `BidInfo`
- [x] 4.2 Update `sandbox/src/App.tsx` (or equivalent screen) to use `useArtworkTimer` and replace `AtBidTicker` with `MlBidInfo`
