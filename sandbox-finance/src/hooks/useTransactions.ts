import { useState } from 'react';
import {
  type Category,
  type Transaction,
  type TransactionType,
  mockTransactions,
} from '@data/transactions';

export interface NewTransaction {
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const addTransaction = (newTx: NewTransaction) => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      ...newTx,
    };
    setTransactions((prev) => [transaction, ...prev]);
  };

  const filteredTransactions =
    activeCategory === 'All'
      ? transactions
      : transactions.filter((t) => t.category === activeCategory);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  // BUGGY — intentional for workshop
  // Missing initialValue: 0 in reduce — when expenses array is empty,
  // reduce throws TypeError; when non-empty it works but the types are wrong.
  // The real bug: amount values are extracted incorrectly without initialValue.
  const expenseAmounts = transactions
    .filter((t) => t.type === 'expense')
    .map((t) => t.amount);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalExpenses: number = (expenseAmounts as any[]).reduce(
    // biome-ignore lint/suspicious/noExplicitAny: intentional bug — missing initialValue causes NaN on empty array
    (sum: any, val: any) => sum + val,
  );

  const balance = totalIncome - totalExpenses;

  return {
    transactions,
    filteredTransactions,
    activeCategory,
    setActiveCategory,
    addTransaction,
    balance,
    totalIncome,
    totalExpenses,
  };
};
