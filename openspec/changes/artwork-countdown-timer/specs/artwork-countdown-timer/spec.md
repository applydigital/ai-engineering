## ADDED Requirements

### Requirement: useArtworkTimer hook counts down from 60 seconds
The system SHALL provide a `useArtworkTimer` hook that initialises a 60-second countdown on mount. The hook SHALL decrement the counter by 1 each second using an interval. The hook SHALL return `{ timeRemaining: number, reset: () => void }`.

#### Scenario: Timer decrements each second
- **WHEN** the hook is mounted
- **THEN** `timeRemaining` starts at 60 and decreases by 1 every second

#### Scenario: Reset function restores the timer to 60
- **WHEN** `reset()` is called at any point during the countdown
- **THEN** `timeRemaining` SHALL immediately return to 60 and the countdown restarts

### Requirement: useArtworkTimer triggers onRotate callback at zero
The hook SHALL accept an `onRotate` callback. When `timeRemaining` reaches 0, the hook SHALL invoke `onRotate` and automatically reset the countdown to 60.

#### Scenario: Callback fires at expiry and timer resets
- **WHEN** the countdown reaches 0
- **THEN** `onRotate` SHALL be called exactly once and `timeRemaining` SHALL reset to 60

#### Scenario: Callback is not called before zero
- **WHEN** the countdown is between 60 and 1
- **THEN** `onRotate` SHALL NOT be called

### Requirement: Timer component displays remaining time in mm:ss format
The system SHALL provide a `Timer` display component (web: `AtTimer`, mobile: `Timer`) that accepts a `timeRemaining: number` prop and renders it as `mm:ss`.

#### Scenario: Seconds below 60 display as 00:ss
- **WHEN** `timeRemaining` is 45
- **THEN** the component SHALL render "00:45"

#### Scenario: Full minute displays as 01:00
- **WHEN** `timeRemaining` is 60
- **THEN** the component SHALL render "01:00"

#### Scenario: Zero displays as 00:00
- **WHEN** `timeRemaining` is 0
- **THEN** the component SHALL render "00:00"
