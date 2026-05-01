# Apocalypse Fund — Epics & Stories

## Epic 1: Core Stability

Fix known bugs in the base app before extending functionality.

### Story 1.1 — Fix balance NaN bug (`BUG-001`)

**As a** survivor,
**I want** the balance to show the correct amount even when I have no expenses,
**So that** I can trust the number on screen.

**Acceptance Criteria:**
- Given no expense transactions exist, when the balance is calculated, then it equals the total income (not `NaN`)
- Given the fix is applied, when `npm run test` runs, then the `it.todo` in `useTransactions.test.ts` is converted to a passing test
- The `AtBalanceTicker` no longer displays `$ ???` when expenses array is empty

**Files to touch:** `src/hooks/useTransactions.ts`, `src/hooks/useTransactions.test.ts`

---

### Story 1.2 — Fix form reset bug (`BUG-002`)

**As a** survivor,
**I want** the add transaction form to fully reset after submission,
**So that** I don't accidentally log a transaction with stale values.

**Acceptance Criteria:**
- Given a transaction is submitted successfully, when the form resets, then all fields (including category and type selects) return to their default values
- A test covers the reset behavior

**Files to touch:** `src/components/molecules/MlAddTransactionForm/MlAddTransactionForm.tsx`, `MlAddTransactionForm.test.tsx`

---

## Epic 2: Transaction Management

Extend the app with delete and search capabilities.

### Story 2.1 — Delete a transaction (`FEATURE-001`)

**As a** survivor,
**I want** to delete a transaction from the list,
**So that** I can correct mistakes or remove outdated entries.

**Acceptance Criteria:**
- Given a transaction is visible in the list, when the user clicks a delete button, then the transaction is removed
- The balance updates immediately after deletion
- Given all expenses are deleted, then the balance bug (`BUG-001`) becomes visible — or is already fixed
- A test covers the delete behavior in `useTransactions`
- The delete button is accessible (has an aria-label)

**Files to touch:** `src/hooks/useTransactions.ts`, `src/components/molecules/MlTransactionList/MlTransactionList.tsx`, tests

---

### Story 2.2 — Spending summary by category (`FEATURE-002`)

**As a** survivor,
**I want** to see a breakdown of totals per category,
**So that** I know where my resources are going.

**Acceptance Criteria:**
- Given transactions exist, when the summary is visible, then each category shows its net total
- Categories with no transactions are not shown
- Summary updates in real time when transactions are added or deleted

**Files to touch:** `src/hooks/useTransactions.ts` (add derived summary), new molecule `MlCategorySummary`

---

## Epic 3: Alerts & Feedback

Add contextual feedback to help survivors make decisions.

### Story 3.1 — Low balance warning (`FEATURE-003`)

**As a** survivor,
**I want** a warning when my balance drops below $100,
**So that** I know when I'm at critical resource levels.

**Acceptance Criteria:**
- Given balance < $100, then a warning banner displays: "⚠️ Critical funds — survival at risk"
- Given balance >= $100, then no banner is shown
- Warning updates in real time
- A test covers both the warning and no-warning states

**Files to touch:** New atom `AtWarningBanner`, `src/App.tsx`
