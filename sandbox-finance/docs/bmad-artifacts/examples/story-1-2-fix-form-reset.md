---
id: "1-2"
title: "Fix form reset bug"
epic: 1
type: bug
github_issue: BUG-002
status: ready-for-dev
---

# Story 1-2: Fix form reset bug

## Context

After submitting a valid transaction, the `MlAddTransactionForm` calls `reset()` from React Hook Form. However, the category and type `<select>` elements may not visually return to their default values consistently — React Hook Form's `reset()` without explicit default values can leave controlled selects in an inconsistent state.

## What to build

Ensure `reset()` is called with the explicit default values so the form always returns to a known state after submission.

## Files

- `src/components/molecules/MlAddTransactionForm/MlAddTransactionForm.tsx` — form component
- `src/components/molecules/MlAddTransactionForm/MlAddTransactionForm.test.tsx` — tests

## Tasks

- [ ] In `MlAddTransactionForm.tsx`, update the `reset()` call to pass explicit defaults: `reset({ description: '', amount: undefined, category: 'Supplies', type: 'expense' })`
- [ ] Add a test that submits the form and then verifies the category select has returned to "Supplies"
- [ ] Run `npm run test` — all tests pass

## Acceptance Criteria

- Given a transaction is submitted successfully, when the form resets, then the description field is empty
- Given a transaction is submitted successfully, when the form resets, then the category select shows "Supplies"
- Given a transaction is submitted successfully, when the form resets, then the type select shows "expense"
- A test verifies the reset behavior

## Notes for the dev agent

React Hook Form's `reset()` accepts a values object. Pass the same defaults as `useForm`'s `defaultValues` to guarantee a consistent reset state.
