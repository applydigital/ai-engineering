import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockTransactions } from '@data/transactions';
import { MlTransactionList } from './MlTransactionList';

describe('MlTransactionList', () => {
  it('renders all transactions', () => {
    render(<MlTransactionList transactions={mockTransactions} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(6);
  });

  it('shows empty state message when no transactions', () => {
    render(<MlTransactionList transactions={[]} />);
    expect(screen.getByText('No transactions found.')).toBeDefined();
  });

  it('shows + prefix for income transactions', () => {
    render(<MlTransactionList transactions={[mockTransactions[0]]} />);
    expect(screen.getByText('+$450')).toBeDefined();
  });

  it('shows - prefix for expense transactions', () => {
    render(<MlTransactionList transactions={[mockTransactions[3]]} />);
    expect(screen.getByText('-$320')).toBeDefined();
  });
});
