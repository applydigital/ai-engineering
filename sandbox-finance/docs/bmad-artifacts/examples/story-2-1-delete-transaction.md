---
id: "2-1"
title: "Delete a transaction"
epic: 2
type: feature
github_issue: FEATURE-001
status: ready-for-dev
---

# Story 2-1: Delete a transaction

## Context

Currently there is no way to remove a transaction from the list. This is the first feature extension of the workshop. It also serves as the trigger for the NaN balance bug (BUG-001) — once delete exists, a user can delete all expenses and witness the broken balance. Story 1-1 should ideally be completed first.

## What to build

Add a delete button to each transaction row. Clicking it removes the transaction from the list and updates the balance immediately.

## Files

- `src/hooks/useTransactions.ts` — add `deleteTransaction(id)` function
- `src/hooks/useTransactions.test.ts` — test the delete behavior
- `src/components/molecules/MlTransactionList/MlTransactionList.tsx` — add delete button to each row
- `src/components/molecules/MlTransactionList/MlTransactionList.test.tsx` — test button renders and triggers callback
- `src/App.tsx` — wire `deleteTransaction` from hook to list component

## Tasks

- [ ] In `useTransactions.ts`, add a `deleteTransaction(id: string)` function that filters out the transaction with the matching id
- [ ] In `useTransactions.test.ts`, add a test: given a transaction exists, when `deleteTransaction` is called with its id, then it is removed from the list
- [ ] In `MlTransactionList.tsx`, add an `onDelete?: (id: string) => void` prop and render a delete button on each row
- [ ] The delete button must have `aria-label="Delete transaction"` for accessibility
- [ ] In `MlTransactionList.test.tsx`, add a test: given a delete button is clicked, then `onDelete` is called with the correct transaction id
- [ ] In `App.tsx`, pass `deleteTransaction` from `useTransactions` to `MlTransactionList` as `onDelete`
- [ ] Run `npm run test` — all tests pass
- [ ] Run `npm run build` — no TypeScript errors

## Acceptance Criteria

- Given a transaction is visible, when the user clicks the delete button, then it is removed from the list
- The balance updates immediately after deletion
- The delete button has an accessible aria-label
- Given all expenses are deleted, the balance reflects total income only (requires Story 1-1 to be fixed first, otherwise NaN will appear)
- All new behavior is covered by tests

## Design Notes

Keep the delete button simple — a small `×` or trash icon text button on the right side of each transaction row. It should be visually subtle so it doesn't dominate the list. Example:

```tsx
<button
  type="button"
  aria-label="Delete transaction"
  onClick={() => onDelete?.(tx.id)}
  className="text-stone-500 hover:text-red-400 text-xs ml-2 shrink-0"
>
  ✕
</button>
```
