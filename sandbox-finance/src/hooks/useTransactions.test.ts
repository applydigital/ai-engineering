import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useTransactions } from './useTransactions';

describe('useTransactions', () => {
  it('returns the mock transactions on initial load', () => {
    const { result } = renderHook(() => useTransactions());
    expect(result.current.transactions).toHaveLength(6);
  });

  it('addTransaction prepends a new transaction to the list', () => {
    const { result } = renderHook(() => useTransactions());

    act(() => {
      result.current.addTransaction({
        description: 'Traded antibiotics',
        amount: 75,
        category: 'Medical',
        type: 'income',
      });
    });

    expect(result.current.transactions).toHaveLength(7);
    expect(result.current.transactions[0].description).toBe(
      'Traded antibiotics',
    );
  });

  it('filters transactions by active category', () => {
    const { result } = renderHook(() => useTransactions());

    act(() => {
      result.current.setActiveCategory('Weapons');
    });

    const allWeapons = result.current.filteredTransactions.every(
      (t) => t.category === 'Weapons',
    );
    expect(allWeapons).toBe(true);
  });

  it('returns all transactions when activeCategory is All', () => {
    const { result } = renderHook(() => useTransactions());

    act(() => {
      result.current.setActiveCategory('All');
    });

    expect(result.current.filteredTransactions).toHaveLength(6);
  });

  it('computes balance correctly with mixed income and expense transactions', () => {
    const { result } = renderHook(() => useTransactions());
    // income: 450 + 200 + 800 = 1450
    // expense: 320 + 150 + 90 = 560
    // balance: 1450 - 560 = 890
    expect(result.current.balance).toBe(890);
  });

  it.todo(
    'BUG: balance is NaN when there are no expense transactions — fix by adding initialValue: 0 to the expenses reduce in useTransactions.ts',
  );
});
