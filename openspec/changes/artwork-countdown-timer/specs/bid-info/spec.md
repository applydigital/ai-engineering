## ADDED Requirements

### Requirement: BidInfo composes BidTicker and Timer
The system SHALL provide a `BidInfo` component (web: `MlBidInfo`, mobile: `BidInfo`) that renders both the `BidTicker` (web: `AtBidTicker`) and `Timer` (web: `AtTimer`) components. The component SHALL accept `bid: number` and `timeRemaining: number` as required props.

#### Scenario: Both child components receive correct props
- **WHEN** `BidInfo` is rendered with `bid={500}` and `timeRemaining={30}`
- **THEN** `BidTicker` SHALL receive `bid={500}` and `Timer` SHALL receive `timeRemaining={30}`

#### Scenario: BidTicker and Timer are both visible
- **WHEN** `BidInfo` is rendered
- **THEN** both the bid amount and the countdown time SHALL be visible in the output

### Requirement: BidInfo forwards className to container on web
On web, `MlBidInfo` SHALL accept an optional `className` prop and apply it to the outermost container element.

#### Scenario: Custom class is applied to container
- **WHEN** `MlBidInfo` is rendered with `className="custom-class"`
- **THEN** the outermost element SHALL include "custom-class" in its class list
