# AI Engineering Sandbox - Art Bidding Application

Sandbox application for Ai engineering experimentation.

The sandbox app is a rudimentary art auction app built with Typescript React.

Current functionality is deliberately limited; Users submit a bid and if the bid is higher then the existing bid it is accepted. Validation is enforced by React Hook forms to ensure a lower bid is never accepted.

## Tech Stack

- **Framework:** React 19.1.1
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite (Rolldown variant 7.1.14)
- **Styling:** Tailwind CSS 4.1.17
- **Forms:** React Hook Form 7.66.0
- **Testing:** Vitest 4.0.7 + React Testing Library
- **Component Documentation:** Storybook 10.0.7
- **Linting/Formatting:** Biome 2.3.4

## Prerequisites

This project has strict engine requirements:

- **Node.js:** >= 20.19.5
- **npm:** >= 10.8.2

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-engineering

# Install dependencies
npm install
```

## NPM Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Run tests in watch mode
npm test

# Run Storybook component documentation (http://localhost:6006)
npm run storybook

# Lint and format code with Biome
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
ai-engineering/
├── src/
│   ├── assets/
│   │   └── art/              # Art images for auction
│   ├── components/
│   │   ├── atoms/            # Atomic design - basic UI components
│   │   └── molecules/        # Molecular design - composed components
│   ├── data/
│   │   └── artImages.ts      # Art image index
│   ├── hooks/
│   │   ├── useBidding.ts     # Bid management logic
│   │   └── useRandomArt.ts   # Random art selection
│   ├── layout/
│   │   ├── container.tsx     # Container component
│   │   └── grid.tsx          # Grid layout component
│   ├── test/
│   │   └── setup.ts          # Test configuration
│   ├── utilities/
│   │   └── sanitizeTailwindClassnames.ts
│   ├── App.tsx               # Main application component
│   └── main.tsx              # Application entry point
├── .storybook/               # Storybook configuration
└── public/                   # Static assets
```

## Component Naming Convention

- **At prefix** (Atomic): Core UI components (AtImage, AtBidTicker)
- **Ml prefix** (Molecular): Composed components with logic (MlBidForm)

## Development Workflow

### Running the Application

Start the development server with this command:

```bash
npm run dev
```

Vite has HMR out of the box, you do not need to manually refresh your browser upon code changes

### Storybook

We use Storybook to document components and to surgically uphold VQA standards:

```bash
npm run storybook
```

### Testing

The project uses:

- Vitest+React Testing Library for unit testing
- @testing-library/user-event for interaction testing

Run the test suite via:

```bash
npm test
```

### Code Quality

Biome handles both linting and formatting, providing fast feedback on code quality issues.
We recommend installing the Biome VS Code extension

To Format and lint your code, run this command:

```bash
npm run lint
```

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Key Features

### Bidding System

The application uses a custom `useBidding` hook to manage:

- Current bid state
- Minimum bid validation
- Bid submission handling

### Random Art Display

The `useRandomArt` hook cycles through art images, creating a dynamic auction experience on every page reload.
