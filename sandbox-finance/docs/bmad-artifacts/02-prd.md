# Apocalypse Fund — Product Requirements Document (PRD)

## Overview

Apocalypse Fund is a client-side React application for tracking survival transactions. This PRD covers the base application and defines the acceptance criteria for the planned workshop features.

---

## Current Features (Baseline)

### F-001: View Transaction List

**Description:** On load, the app displays a list of pre-seeded mock transactions.

**Acceptance Criteria:**
- Given the app loads, when mock data is present, then 6 transactions are displayed
- Each transaction shows: description, amount, type badge (income/expense), category badge, and date
- Income amounts are displayed in green with a `+` prefix
- Expense amounts are displayed in red with a `-` prefix

---

### F-002: View Balance

**Description:** The app displays a total survival balance calculated from all transactions.

**Acceptance Criteria:**
- Given transactions exist, when the page loads, then balance = sum(income) - sum(expenses)
- Balance is displayed prominently at the top of the page
- A positive balance is shown in green
- A negative or NaN balance is shown in red with `$ ???`

> **Known Bug:** When no expense transactions exist, the balance displays `$ ???` due to a missing `initialValue` in `.reduce()`. See `BUG-001`.

---

### F-003: Add Transaction

**Description:** Users can add a new transaction via a form.

**Acceptance Criteria:**
- Given the form is visible, when the user fills all fields and submits, then the new transaction appears at the top of the list
- The balance updates immediately after submission
- The form resets to empty after a successful submit
- Given the user submits with an empty description, then a validation error is shown
- Given the user enters a negative or zero amount, then a validation error is shown

---

### F-004: Filter by Category

**Description:** Users can filter the transaction list by category.

**Acceptance Criteria:**
- Given the filter is set to a category, when the filter is applied, then only transactions matching that category are shown
- Given the filter is set to "All", then all transactions are shown
- The active filter button is visually highlighted
- The balance is NOT filtered — it always reflects all transactions

---

## Planned Features (GitHub Board Tickets)

### F-005: Delete Transaction (`FEATURE-001`)

**Description:** Users can delete a transaction from the list.

**Acceptance Criteria:**
- Given a transaction is visible, when the user clicks the delete button, then the transaction is removed from the list
- The balance updates immediately after deletion
- Given the last expense is deleted, then the balance bug (`BUG-001`) becomes visible

---

### F-006: Spending Summary by Category (`FEATURE-002`)

**Description:** Display a summary panel showing total income and total expenses per category.

**Acceptance Criteria:**
- Given transactions exist, when the summary is visible, then each category shows its total spend or income
- Categories with zero transactions are not shown
- Summary updates in real time as transactions are added or deleted

---

### F-007: Low Balance Warning (`FEATURE-003`)

**Description:** Display a warning when the balance falls below a threshold.

**Acceptance Criteria:**
- Given the balance is below $100, then a warning banner is shown: "⚠️ Critical funds — survival at risk"
- Given the balance is above $100, then no warning is shown
- The warning updates in real time

---

## Known Bugs (GitHub Board)

### BUG-001: Balance shows `$ ???` when no expense transactions exist

**Location:** `src/hooks/useTransactions.ts` — balance calculation

**Description:** The `.reduce()` call on the expenses array is missing an `initialValue` of `0`. When the expenses array is empty, JavaScript's `.reduce()` without an initial value returns `undefined`, making `balance = totalIncome - undefined = NaN`.

**Steps to Reproduce:**
1. Delete all expense transactions (requires `FEATURE-001`)
2. Observe that `AtBalanceTicker` displays `$ ???` in red

**Expected:** Balance should display the total income amount in green
**Actual:** Balance displays `$ ???` in red

**Fix:** Add `, 0` as the second argument to `.reduce()` in `useTransactions.ts`

---

### BUG-002: Form does not reset category after submission

**Location:** `src/components/molecules/MlAddTransactionForm/MlAddTransactionForm.tsx`

**Description:** After submitting the form, the category and type selects reset to their default values visually but the internal React Hook Form state may not reflect the defaults consistently across re-renders.

**Steps to Reproduce:**
1. Select "Weapons" as category
2. Submit a valid transaction
3. Observe the category select after reset

**Expected:** Category resets to "Supplies" (default)
**Actual:** Category may retain the previously selected value in form state
