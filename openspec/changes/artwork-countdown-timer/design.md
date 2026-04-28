## Context

The project contains two sandboxes: a web app (`sandbox/`) using React + Tailwind with atomic design naming (`At`/`Ml` prefixes), and a mobile app (`sandbox-mobile/`) using React Native / Expo with flat component naming. Both expose a bid-display area today (`AtBidTicker` / `BidTicker`) alongside an artwork viewer.

`useRandomArt` currently picks a random image once on mount — there is no timed rotation. The new `useArtworkTimer` hook introduces that rotation loop.

## Goals / Non-Goals

**Goals:**
- Implement `useArtworkTimer` hook that counts down 60 s, fires a callback at expiry, and resets automatically.
- Implement a `Timer` display component (`AtTimer` on web, `Timer` on mobile) showing `mm:ss`.
- Implement a `BidInfo` wrapper (`MlBidInfo` on web, `BidInfo` on mobile) composing `BidTicker` + `Timer`.
- Apply the feature in both sandboxes.

**Non-Goals:**
- Configurable countdown duration (hard-coded to 60 s for now).
- Persistence of timer state across app restarts.
- Server-driven rotation.

## Decisions

**D1 — Hook owns only the timer, not the image array**
`useArtworkTimer` accepts an `onRotate` callback and returns `{ timeRemaining, reset }`. The caller (screen/page) wires rotation logic (`useRandomArt` or equivalent) into `onRotate`. This keeps the hook single-purpose and testable in isolation.
_Alternative_: hook receives `images[]` and manages current image internally — rejected because it merges two concerns and makes the hook harder to reuse.

**D2 — `setInterval` for countdown ticks**
A 1-second `setInterval` decrements the counter. On cleanup the interval is cleared. This is the standard React pattern for timers and avoids `requestAnimationFrame` overhead for a 1 s resolution counter.
_Alternative_: `Date.now()` drift correction — unnecessary at 1 s resolution.

**D3 — `BidInfo` is a thin composition wrapper**
`BidInfo` / `MlBidInfo` accepts `bid`, `timeRemaining`, and optional styling props. It renders `BidTicker` + `Timer` side-by-side. No state lives here.
_Alternative_: `BidInfo` owns the timer hook — rejected because it couples display and logic, making each harder to test.

**D4 — Web naming follows existing atomic conventions**
`Timer` → `AtTimer`, `BidInfo` → `MlBidInfo`. Mobile uses flat names (`Timer`, `BidInfo`) matching the existing mobile component structure.

## Risks / Trade-offs

- **Timer drift over long sessions** → Acceptable for 60 s intervals; a `Date.now`-anchored approach can be swapped in later if needed.
- **Multiple `BidInfo` instances** → Each would run its own timer. Current design has a single instance per screen, so this is not a concern yet.
- **`setInterval` in tests** → Use `jest.useFakeTimers()` to control time deterministically.
