---
id: "1-1"
title: "Fix balance NaN bug"
epic: 1
type: bug
github_issue: BUG-001
status: ready-for-dev
---

# Story 1-1: Fix balance NaN bug

## Context

The balance calculation in `useTransactions.ts` uses `.reduce()` without an `initialValue`. When the expenses array is empty (no expense transactions), JavaScript's `.reduce()` returns `undefined` instead of `0`, making `balance = totalIncome - undefined = NaN`. The `AtBalanceTicker` component then displays `$ ???` in red.

This is a small but impactful bug — it will become visible to users once Story 2-1 (delete transaction) is implemented, because deleting all expenses triggers it.

## What to build

Fix the reduce call so it returns `0` when the expenses array is empty.

## Files

- `src/hooks/useTransactions.ts` — where the bug lives
- `src/hooks/useTransactions.test.ts` — where the test lives (currently `it.todo`)

## Tasks

- [ ] In `useTransactions.ts`, add `0` as the second argument to `.reduce()` on the expenses calculation
- [ ] In `useTransactions.test.ts`, convert the `it.todo` into a real passing test that verifies the balance is correct when no expenses exist
- [ ] Run `npm run test` — all tests should pass with no todos remaining for this bug

## Acceptance Criteria

- Given no expense transactions exist, when the balance is calculated, then it equals the total income amount
- Given the fix is in place, when `npm run test` runs, then the previously-todo test now passes
- The `AtBalanceTicker` displays the correct amount in green (not `$ ???`) when expenses array is empty

## Notes for the dev agent

The bug is on this line in `useTransactions.ts`:

```typescript
// BUGGY — missing initialValue
.reduce((sum: any, val: any) => sum + val);

// FIXED
.reduce((sum, val) => sum + val, 0);
```

After fixing, also clean up the `as any[]` cast — it was only needed to work around the TypeScript error caused by the missing initialValue.
