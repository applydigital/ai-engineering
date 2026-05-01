import { AtBadge } from '@components/atoms/AtBadge';
import type { Transaction } from '@data/transactions';

export interface MlTransactionListProps {
  transactions: Transaction[];
}

export const MlTransactionList = ({
  transactions,
}: MlTransactionListProps) => {
  if (transactions.length === 0) {
    return (
      <div className='text-center py-12 text-stone-500'>
        <p className='text-lg'>No transactions found.</p>
        <p className='text-sm mt-1'>The wasteland is quiet… for now.</p>
      </div>
    );
  }

  return (
    <ul className='space-y-2'>
      {transactions.map((tx) => (
        <li
          key={tx.id}
          className='flex items-center justify-between p-3 rounded-lg bg-stone-800/60 border border-stone-700/40'
        >
          <div className='flex flex-col gap-1 min-w-0'>
            <span className='text-stone-100 text-sm font-medium truncate'>
              {tx.description}
            </span>
            <div className='flex gap-1.5'>
              <AtBadge label={tx.type} variant={tx.type} />
              <AtBadge label={tx.category} variant='category' />
              <span className='text-stone-500 text-xs self-center'>
                {tx.date}
              </span>
            </div>
          </div>
          <span
            className={`text-sm font-semibold ml-4 shrink-0 ${
              tx.type === 'income' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};
