# Apocalypse Fund — Technical Architecture

## Overview

Client-side React SPA. No backend, no database, no authentication. All state lives in React memory and resets on page reload. Designed to be simple enough for workshop attendees to navigate within minutes.

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 19.1.x |
| Language | TypeScript | 5.9.x |
| Build Tool | Vite (Rolldown) | 7.1.x |
| Styling | Tailwind CSS | v4 |
| Forms | React Hook Form | 7.x |
| Testing | Vitest + React Testing Library | 4.x |
| Component Docs | Storybook | 10.x |
| Linting | Biome | 2.3.x |

---

## File Structure

```
sandbox-finance/
  src/
    components/
      atoms/          ← primitive UI components (no business logic)
        AtButton/
        AtBadge/
        AtBalanceTicker/
      molecules/      ← composed components (may use hooks via props)
        MlAddTransactionForm/
        MlCategoryFilter/
        MlTransactionList/
    hooks/
      useTransactions.ts   ← ALL state and business logic lives here
    data/
      transactions.ts      ← Transaction type, Category type, mock data
    layout/
      container.tsx
      grid.tsx
    utilities/
      sanitizeTailwindClassnames.ts
    App.tsx                ← wires everything together
```

---

## State Architecture

All application state is managed by a single hook: `useTransactions`.

```
useTransactions()
  ├── transactions[]         ← full list (seeded from mockTransactions)
  ├── activeCategory         ← current filter ('All' | Category)
  ├── filteredTransactions   ← derived: transactions filtered by activeCategory
  ├── balance                ← derived: totalIncome - totalExpenses  ⚠️ BUG HERE
  ├── addTransaction()       ← prepends new transaction to list
  └── setActiveCategory()    ← updates filter
```

`App.tsx` consumes `useTransactions` and passes values down as props. Components are stateless — they receive data and callbacks via props only.

---

## Component Responsibilities

| Component | Responsibility |
|---|---|
| `AtButton` | Generic clickable button |
| `AtBadge` | Colored label chip (income/expense/category) |
| `AtBalanceTicker` | Displays balance — green if positive, red if NaN/negative |
| `MlTransactionList` | Renders list of transactions using `AtBadge` |
| `MlAddTransactionForm` | React Hook Form — validates and emits new transaction |
| `MlCategoryFilter` | Filter buttons — emits selected category |

---

## Data Model

```typescript
type Category = 'Supplies' | 'Weapons' | 'Bunker' | 'Bribes' | 'Medical' | 'Fuel';
type TransactionType = 'income' | 'expense';

interface Transaction {
  id: string;
  description: string;
  amount: number;         // always positive
  category: Category;
  type: TransactionType;
  date: string;           // ISO date string YYYY-MM-DD
}
```

---

## Key Constraints for New Features

- **No new external dependencies** without discussing with the team
- **New state** should live in `useTransactions` — not in component local state
- **New components** follow atomic design: atoms have no business logic, molecules may compose atoms and receive callbacks
- **All new hooks and components** need at least one test
- **Tailwind classes** must go through `sanitizeTailwindClassnames()` when using template literals
- **Path aliases** — use `@hooks`, `@components`, `@data`, `@utilities`, `@layout` (never relative `../../`)

---

## Testing Approach

- Unit tests via Vitest + React Testing Library
- Hook tests use `renderHook` from `@testing-library/react`
- No E2E tests in scope for the workshop
- The deliberate bug in `useTransactions` is documented as `it.todo` — attendees convert it to a real test as part of the fix
