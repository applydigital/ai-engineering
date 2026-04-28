## Why

The auction experience needs a visual cue to communicate how long the current artwork will be on display before rotating to the next. A countdown timer drives urgency and improves bidder engagement without requiring manual interaction.

## What Changes

- Add a `Timer` component that displays a countdown in `mm:ss` format.
- Add a `useArtworkTimer` custom hook that manages a 60-second countdown and triggers artwork rotation on expiry.
- Add a `BidInfo` wrapper component that composes `BidTicker` and `Timer` together.
- `BidInfo` replaces direct usage of `BidTicker` at call sites that also need to show timing.

## Capabilities

### New Capabilities
- `artwork-countdown-timer`: Countdown hook and Timer display component that auto-rotate artwork every 60 seconds and expose remaining time + reset function.
- `bid-info`: Composed wrapper component combining `BidTicker` and `Timer` with unified props.

### Modified Capabilities

## Impact

- New files: `Timer` component, `BidInfo` component, `useArtworkTimer` hook.
- Existing `BidTicker` component remains unchanged; `BidInfo` wraps it.
- No API or dependency changes required.
