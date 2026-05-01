# Apocalypse Fund — Product Context

## Product Summary

Apocalypse Fund is a personal finance tracker set in a post-apocalyptic world. Users log survival transactions — income from looting or trading, and expenses from supplies, bribes, and fuel — to monitor their balance and manage resources across categories.

## Workshop Purpose

This app is intentionally small so workshop attendees can focus on AI-assisted development workflows (BMAD) rather than understanding a large codebase. Every feature and bug in this app exists to be a vehicle for practicing BMAD skills.

## Current Functionality

- View a list of transactions (description, amount, category, type, date)
- See total survival balance (income minus expenses)
- Add a new transaction via a form
- Filter transactions by category

## Categories

`Supplies` | `Weapons` | `Bunker` | `Bribes` | `Medical` | `Fuel`

## Tech Stack

- React 19 + TypeScript
- Vite (Rolldown)
- Tailwind CSS v4
- React Hook Form
- Vitest + React Testing Library
- Storybook
- Biome

## Constraints

- No backend — all data lives in React state (mock data on load)
- No authentication
- No external APIs
- Keep changes understandable for workshop attendees
- Prefer simple, readable code over clever abstractions

## Known Bug (Workshop Exercise)

The balance calculation in `src/hooks/useTransactions.ts` breaks when there are no expense transactions — `.reduce()` is called without an `initialValue`, returning `NaN` on an empty array. The `AtBalanceTicker` component displays `$ ???` in red when this happens.
