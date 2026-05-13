export type Category =
  | 'Supplies'
  | 'Weapons'
  | 'Bunker'
  | 'Bribes'
  | 'Medical'
  | 'Fuel';

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
  date: string;
}

export const CATEGORIES: Category[] = [
  'Supplies',
  'Weapons',
  'Bunker',
  'Bribes',
  'Medical',
  'Fuel',
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Looted warehouse on Route 9',
    amount: 450,
    category: 'Supplies',
    type: 'income',
    date: '2026-04-28',
  },
  {
    id: '2',
    description: 'Sold extra ammunition to survivors',
    amount: 200,
    category: 'Weapons',
    type: 'income',
    date: '2026-04-29',
  },
  {
    id: '3',
    description: 'Bunker rental fee from neighbor group',
    amount: 800,
    category: 'Bunker',
    type: 'income',
    date: '2026-04-30',
  },
  {
    id: '4',
    description: 'Canned food stockpile (3 months supply)',
    amount: 320,
    category: 'Supplies',
    type: 'expense',
    date: '2026-04-27',
  },
  {
    id: '5',
    description: 'Bribed checkpoint guard for safe passage',
    amount: 150,
    category: 'Bribes',
    type: 'expense',
    date: '2026-04-29',
  },
  {
    id: '6',
    description: 'Generator fuel — 50 liters',
    amount: 90,
    category: 'Fuel',
    type: 'expense',
    date: '2026-04-30',
  },
];
