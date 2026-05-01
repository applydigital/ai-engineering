# ☢️ Apocalypse Fund

Sandbox application for BMAD AI Engineering workshops.

The Apocalypse Fund is an apocalypse-themed personal finance tracker built with React + TypeScript. Users log survival transactions (income and expenses), filter by category, and monitor their balance.

## Workshop Purpose

This app is intentionally simple so attendees can focus on AI-assisted development workflows (BMAD) rather than understanding a large codebase.

The app contains a **deliberate bug** in `src/hooks/useTransactions.ts` — the balance calculation breaks when there are no expense transactions. Finding and fixing this bug is part of the workshop.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite (Rolldown)
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form
- **Testing:** Vitest + React Testing Library
- **Component Docs:** Storybook
- **Linting/Formatting:** Biome

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run test       # run tests
npm run storybook  # http://localhost:6006
npm run build      # production build
```

## Categories

`Supplies` | `Weapons` | `Bunker` | `Bribes` | `Medical` | `Fuel`
