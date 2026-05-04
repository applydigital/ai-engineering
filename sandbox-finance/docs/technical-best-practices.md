# Technical Best Practices — Apocalypse Fund

> Reference guide for contributors. Reflects the patterns already in use across `src/` — follow these when adding or modifying code.

---

## Table of Contents

1. [Stack Overview](#1-stack-overview)
2. [Directory Structure & Naming](#2-directory-structure--naming)
3. [TypeScript](#3-typescript)
4. [Component Architecture](#4-component-architecture)
5. [Styling with Tailwind CSS](#5-styling-with-tailwind-css)
6. [State & Custom Hooks](#6-state--custom-hooks)
7. [Forms](#7-forms)
8. [Testing](#8-testing)
9. [Storybook](#9-storybook)
10. [Linting & Formatting](#10-linting--formatting)
11. [Path Aliases](#11-path-aliases)
12. [Known Issues & Workarounds](#12-known-issues--workarounds)

---

## 1. Stack Overview

| Layer | Tool | Version |
|---|---|---|
| UI framework | React | 19 |
| Language | TypeScript | 5.x (strict) |
| Build | Vite (rolldown-vite) | 7 |
| Styling | Tailwind CSS v4 | via `@tailwindcss/vite` |
| Forms | react-hook-form | 7 |
| Lint + Format | Biome | 2.x |
| Tests | Vitest + Testing Library | 4 / 16 |
| Component explorer | Storybook | 10 |
| Node | ≥ 20.19.5 | enforced via `engineStrict` |

---

## 2. Directory Structure & Naming

```
src/
├── components/
│   ├── atoms/          # Smallest, stateless UI units
│   │   └── AtButton/
│   │       ├── AtButton.tsx
│   │       ├── AtButton.test.tsx
│   │       ├── AtButton.stories.tsx
│   │       └── index.ts
│   └── molecules/      # Composed atoms with local behavior
│       └── MlTransactionList/
│           └── ...
├── data/               # Types and mock/seed data
├── hooks/              # Custom React hooks
├── layout/             # Structural layout components
├── utilities/          # Pure helper functions
└── test/
    └── setup.ts        # Global Vitest setup
```

**Naming rules:**

- Atom components: `At` prefix — `AtButton`, `AtBadge`, `AtBalanceTicker`
- Molecule components: `Ml` prefix — `MlTransactionList`, `MlAddTransactionForm`
- Each component lives in its own folder. The folder, the file, and the exported identifier all share the same name.
- Every component folder exports through an `index.ts` barrel so consumers import from the folder, not the file:

  ```ts
  // correct
  import { AtButton } from '@components/atoms/AtButton';

  // avoid
  import { AtButton } from '@components/atoms/AtButton/AtButton';
  ```

- Hooks: `use` prefix, camelCase — `useTransactions`
- Utilities: descriptive camelCase — `sanitizeTailwindClassnames`

---

## 3. TypeScript

The compiler is configured with `"strict": true` plus several additional flags. The key ones that affect day-to-day code:

| Flag | Implication |
|---|---|
| `verbatimModuleSyntax` | Use `import type` for type-only imports |
| `noUnusedLocals` / `noUnusedParameters` | Delete unused variables — don't comment them out |
| `erasableSyntaxOnly` | No `const enum` or legacy TypeScript syntax |
| `noFallthroughCasesInSwitch` | Every `case` needs an explicit `break` or `return` |

**Props interfaces:** Define and export a named interface for every component's props. Co-locate it with the component file.

```ts
// correct
export interface AtBadgeProps {
  label: string;
  variant: AtBadgeVariant;
  className?: string;
}
```

**Type-only imports:** Always use `import type` when the import is used only as a type.

```ts
import type { ReactNode } from 'react';
import type { Transaction } from '@data/transactions';
```

**Variant lookup tables:** When a component has a fixed set of visual states, express the mapping as a `Record` — it's exhaustive and avoids conditional chains.

```ts
const variantClasses: Record<AtBadgeVariant, string> = {
  income: 'bg-green-900/60 text-green-300 border-green-700/40',
  expense: 'bg-red-900/60 text-red-300 border-red-700/40',
  category: 'bg-stone-700/60 text-stone-300 border-stone-600/40',
};
```

---

## 4. Component Architecture

The project follows **Atomic Design** with two active layers: Atoms and Molecules.

```
Atom        = stateless, single-responsibility, no business logic
Molecule    = composes atoms, may have local UI state, talks to hooks via props
Page/App    = wires hooks to molecules, owns layout
```

**Rules:**

- Atoms must not import from `@hooks` or `@data`. They receive everything they need as props.
- Molecules receive callbacks as props (e.g. `onSubmit`, `onFilter`) — they do not call hooks directly except for their own local form/UI state.
- `App.tsx` is the only place that calls `useTransactions` and distributes results downward.
- Use named exports for all components. Default exports are reserved for the root `App`.

**Default values for optional props:**

Provide defaults in the destructuring signature, not inside the function body.

```ts
// correct
export const AtBadge = ({ label, variant, className = '' }: AtBadgeProps) => ...

// avoid
export const AtBadge = (props: AtBadgeProps) => {
  const className = props.className ?? '';
  ...
}
```

---

## 5. Styling with Tailwind CSS

Tailwind v4 is wired through the Vite plugin — no `tailwind.config.js` needed.

**`sanitizeTailwindClassnames`:** Always wrap multi-line or conditionally assembled class strings with this utility. It trims whitespace, collapses duplicate spaces, and deduplicates classes — preventing subtle overrides that are hard to debug.

```ts
import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';

// correct — safe to spread across lines
className={sanitizeTailwindClassnames(`
  base-class
  ${conditional ? 'a' : 'b'}
  ${className}
`)}

// avoid for multi-line/conditional strings
className={`base-class ${conditional ? 'a' : 'b'} ${className}`}
```

**Inline conditional classes:** Use template literals with a ternary inside `sanitizeTailwindClassnames`, not `clsx` or `cn` — the utility already handles deduplication.

**Dark theme:** The app uses a `bg-stone-950` root with `text-stone-100`. New UI surfaces should stay within the stone/neutral palette unless representing semantic state (green = income, red = expense/negative).

---

## 6. State & Custom Hooks

All shared application state lives in `src/hooks/`. Components do not hold state that belongs to the application domain.

**`useTransactions` responsibilities:**

```
transactions          → raw list (source of truth)
filteredTransactions  → derived from activeCategory
addTransaction        → action to prepend a new entry
balance / totalIncome / totalExpenses → derived numeric summaries
```

**Hook design rules:**

- Hooks return a plain object — destructure at the call site.
- Derived values (filtered lists, computed totals) are calculated inside the hook, not in components.
- IDs for new records: use `Date.now().toString()`. Acceptable for client-only state; replace with a UUID library if persistence is introduced.
- Dates for new records: `new Date().toISOString().split('T')[0]` produces `YYYY-MM-DD`.

**`reduce` with numeric arrays — always provide `initialValue`:**

```ts
// correct
transactions.reduce((sum, t) => sum + t.amount, 0);

// INCORRECT — throws on empty array, returns wrong type on single element
transactions.reduce((sum, t) => sum + t.amount);
```

> See [§12 Known Issues](#12-known-issues--workarounds) for the current bug.

---

## 7. Forms

Forms use **react-hook-form**. The standard setup:

```ts
const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
  defaultValues: { category: 'Supplies', type: 'expense' },
});
```

**Conventions:**

- Define a local `FormValues` interface for the generic parameter — do not use the domain `NewTransaction` type directly inside `useForm`.
- Convert numeric inputs with `valueAsNumber: true` in the `register` call, then cast defensively with `Number(data.amount)` before forwarding upstream.
- Call `reset()` after a successful submit to clear the form.
- Validation rules live inline with `register`, not in a separate schema library (no Zod/Yup unless complexity grows).
- Every input has a matching `<label>` with `htmlFor` equal to the input's `id`. This is both an accessibility requirement and what Testing Library's `getByLabelText` relies on.

**Shared style constants:** Define repeated class strings as `const` at the top of the component — not inline and not in a separate file unless shared across multiple components.

```ts
const inputClass = 'w-full bg-stone-800 border border-stone-600 ...';
const labelClass = 'block text-xs text-stone-400 uppercase tracking-wider mb-1';
```

---

## 8. Testing

**Stack:** Vitest + `@testing-library/react` + `@testing-library/user-event` + `@testing-library/jest-dom`

**Setup (`src/test/setup.ts`):** Runs `cleanup()` after every test and imports the jest-dom matchers. All test files inherit this automatically via `setupFiles` in `vite.config.ts`.

**File placement:** Co-locate tests with their subject.

```
AtButton/
├── AtButton.tsx
└── AtButton.test.tsx      ← same folder
```

**Query priority (in order of preference):**

| Query | Use when |
|---|---|
| `getByRole` | Interactive elements (button, input, listitem) |
| `getByLabelText` | Form fields |
| `getByText` | Static rendered text |
| `findBy*` | Async — after user interactions that trigger state updates |

Avoid `getByTestId` unless no semantic alternative exists.

**Interactions:** Always use `userEvent` (not `fireEvent`) for simulating real user input.

```ts
const user = userEvent.setup();
await user.type(screen.getByLabelText(/amount/i), '75');
await user.click(screen.getByRole('button', { name: /log/i }));
```

**Hook tests:** Use `renderHook` + `act` from `@testing-library/react`.

```ts
const { result } = renderHook(() => useTransactions());
act(() => { result.current.addTransaction({ ... }); });
expect(result.current.transactions).toHaveLength(7);
```

**Documenting known bugs:** Use `it.todo` with a description of the bug and the fix location. Do not delete failing tests — mark them todo until fixed.

```ts
it.todo('BUG: balance is NaN when there are no expense transactions — fix by adding initialValue: 0 to reduce in useTransactions.ts');
```

**Mocks:** Use `vi.fn()` for callback props. Name the mock to make assertions readable: `const onSubmit = vi.fn()`.

---

## 9. Storybook

Stories are co-located with components, alongside tests.

**Required structure for every new component:**

```ts
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Atoms/MyComponent',   // or 'Molecules/...'
  component: MyComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-8 bg-stone-900'>  // dark background wrapper
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
```

- Use `satisfies Meta<typeof Component>` — it gives better type inference than `as Meta`.
- `tags: ['autodocs']` generates a documentation page automatically — always include it.
- Create one named story per meaningful visual variant (e.g. `Income`, `Expense`, `Category` for `AtBadge`).
- The `decorators` dark background wrapper ensures stories match the app's actual rendering context.

---

## 10. Linting & Formatting

**Biome** handles both linting and formatting. There is no ESLint or Prettier in this project.

**Run before committing:**

```bash
npm run lint     # biome check --write (lints + formats in place)
```

**Configuration highlights (`biome.json`):**

| Setting | Value |
|---|---|
| Indent | 2 spaces |
| Line width | 80 characters |
| Quotes | Single (`'`) |
| Semicolons | Always |
| `noNonNullAssertion` | Off |
| `noExplicitAny` | Warn |

**Suppression comments:** Use `biome-ignore` (not `eslint-disable`) with a reason.

```ts
// biome-ignore lint/suspicious/noExplicitAny: intentional bug — missing initialValue causes NaN on empty array
```

---

## 11. Path Aliases

Import from aliases — never with relative `../` chains that cross layer boundaries.

| Alias | Maps to |
|---|---|
| `@components/*` | `src/components/*` |
| `@hooks/*` | `src/hooks/*` |
| `@data/*` | `src/data/*` |
| `@utilities/*` | `src/utilities/*` |
| `@layout/*` | `src/layout/*` |
| `@assets/*` | `src/assets/*` |

Aliases are declared in both `tsconfig.app.json` (TypeScript resolution) and `vite.config.ts` (build resolution) — update both if adding a new alias.

---

## 12. Known Issues & Workarounds

### `totalExpenses` reduce — missing `initialValue`

**Location:** `src/hooks/useTransactions.ts`

**Symptom:** `balance` is `NaN` when the transaction list contains zero expense entries. With at least one expense it computes correctly but is typed as `any` internally due to a deliberate workaround cast.

**Root cause:** `Array.prototype.reduce` without an `initialValue` uses the first element as the accumulator, which breaks on empty arrays and makes TypeScript infer `any` instead of `number`.

**Fix:**

```ts
// current (buggy)
const totalExpenses: number = (expenseAmounts as any[]).reduce(
  (sum: any, val: any) => sum + val,
);

// correct
const totalExpenses = transactions
  .filter((t) => t.type === 'expense')
  .reduce((sum, t) => sum + t.amount, 0);
```

The corresponding test is tracked as `it.todo` in `useTransactions.test.ts`.
