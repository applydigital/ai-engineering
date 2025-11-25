# Project Context

## Purpose
An interactive art bidding application that allows users to view random artwork and place bids. The application displays art pieces with a live bid ticker and enforces minimum bid requirements.

## Tech Stack
- **Frontend Framework**: React 19.1.1 with TypeScript 5.9.3
- **Build Tool**: Vite (using Rolldown variant 7.1.14)
- **Styling**: Tailwind CSS 4.1.17 with custom theme
- **Form Handling**: React Hook Form 7.66.0
- **Testing**: Vitest 4.0.7 with jsdom, Testing Library
- **Component Development**: Storybook 10.0.7 with a11y addon
- **Linting/Formatting**: Biome 2.3.4
- **Node Version**: >=20.19.5, npm >=10.8.2 (strict)

## Project Conventions

### Code Style
- **Formatter**: Biome with the following rules:
  - 2-space indentation
  - Single quotes for strings
  - Semicolons required
  - 80-character line width
  - LF line endings
- **Linting**: Biome recommended rules enabled
  - Non-null assertions allowed
  - Explicit `any` produces warnings
- **File Organization**: Components follow atomic design pattern with co-located tests and stories

### Architecture Patterns
- **Atomic Design**: Components organized into atoms and molecules
  - Atoms: `AtButton`, `AtImage`, `AtNumberField`, `AtBidTicker`
  - Molecules: `MlBidForm`
- **Component Structure**: Each component has its own directory with:
  - Component file (`.tsx`)
  - Test file (`.test.tsx`)
  - Storybook story (`.stories.tsx`)
  - Index file for exports
- **Custom Hooks**: Business logic extracted into hooks (e.g., `useBidding`, `useRandomArt`)
- **Path Aliases**: Configured in vite.config.ts
  - `@components` → `src/components`
  - `@layout` → `src/layout`
  - `@hooks` → `src/hooks`
  - `@assets` → `src/assets`
  - `@art` → `src/assets/art`
  - `@utilities` → `src/utilities`
  - `@data` → `src/data`
- **Separation of concerns** Components should only contain presentation logic, business logic should be abstracted into custom hooks or utilities

### Testing Strategy
- **Test-Driven Development**: REQUIRED - All features must be implemented using TDD
  - Write failing tests first that define expected behavior
  - Tests must be reviewed and approved before implementation
  - Implementation should make tests pass without modifying test expectations
  - Each requirement must have corresponding test coverage
- **Unit Tests**: Vitest with jsdom environment
- **Component Testing**: React Testing Library with user-event
- **Test Location**: Co-located with components (`*.test.tsx`)
- **Coverage**: Vitest coverage with v8 provider
- **Storybook Integration**: Visual testing and documentation via Storybook
- **Accessibility**: Storybook a11y addon for accessibility testing

### Git Workflow
- **Branching**: Feature branches off main
- **Main Branch**: `main`
- **Dev Branch**: `dev`
- **Commit Style**: Lowercase imperative messages (e.g., "add tailwind and custom theme", "add new docs")

## Domain Context
This is an art auction/bidding application with the following domain concepts:
- **Bidding**: Users can place bids with a minimum bid requirement
- **Art Display**: Random artwork is shown to users from a curated collection
- **Live Ticker**: Real-time display of current bid amounts
- **Minimum Bid Enforcement**: System ensures bids meet the minimum threshold

## Important Constraints
- **Node Version**: Strict engine requirements (Node >=20.19.5, npm >=10.8.2)
- **Build Tool**: Uses Rolldown variant of Vite (specified as override)
- **Private Package**: Not intended for npm publication
- **Browser Compatibility**: Modern browsers supporting React 19

## External Dependencies
- No external APIs or services currently
- Art images stored locally in `src/data/artImages`
- All functionality is client-side only
