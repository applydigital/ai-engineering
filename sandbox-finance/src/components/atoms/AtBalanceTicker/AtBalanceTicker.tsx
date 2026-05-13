import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';

export interface AtBalanceTickerProps {
  balance: number;
  className?: string;
}

export const AtBalanceTicker = ({
  balance,
  className = '',
}: AtBalanceTickerProps) => {
  const isNaNOrNegative = Number.isNaN(balance) || balance < 0;

  return (
    <div className={sanitizeTailwindClassnames(`text-center ${className}`)}>
      <p className='text-stone-400 text-sm uppercase tracking-widest mb-1'>
        Survival Balance
      </p>
      <h2
        className={sanitizeTailwindClassnames(
          `text-5xl font-bold tabular-nums ${
            isNaNOrNegative ? 'text-red-400' : 'text-green-400'
          }`,
        )}
      >
        {Number.isNaN(balance) ? '$ ???' : `$${balance.toLocaleString()}`}
      </h2>
    </div>
  );
};
