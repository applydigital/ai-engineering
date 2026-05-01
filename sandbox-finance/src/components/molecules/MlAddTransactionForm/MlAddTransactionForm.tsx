import { AtButton } from '@components/atoms/AtButton';
import { CATEGORIES, type Category, type TransactionType } from '@data/transactions';
import type { NewTransaction } from '@hooks/useTransactions';
import { useForm } from 'react-hook-form';

export interface MlAddTransactionFormProps {
  onSubmit: (tx: NewTransaction) => void;
}

interface FormValues {
  description: string;
  amount: number;
  category: Category;
  type: TransactionType;
}

export const MlAddTransactionForm = ({
  onSubmit,
}: MlAddTransactionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { category: 'Supplies', type: 'expense' },
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmit({ ...data, amount: Number(data.amount) });
    reset();
  };

  const inputClass =
    'w-full bg-stone-800 border border-stone-600 rounded-lg px-3 py-2 text-stone-100 text-sm placeholder:text-stone-500 focus:outline-none focus:border-green-600';
  const labelClass = 'block text-xs text-stone-400 uppercase tracking-wider mb-1';
  const errorClass = 'text-red-400 text-xs mt-1';

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='space-y-4'
      aria-label='Add transaction form'
    >
      <div>
        <label htmlFor='description' className={labelClass}>
          Description
        </label>
        <input
          id='description'
          className={inputClass}
          placeholder='e.g. Traded antibiotics'
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && (
          <p className={errorClass}>{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='amount' className={labelClass}>
          Amount ($)
        </label>
        <input
          id='amount'
          type='number'
          step='0.01'
          className={inputClass}
          placeholder='0.00'
          {...register('amount', {
            required: 'Amount is required',
            min: { value: 0.01, message: 'Amount must be positive' },
            valueAsNumber: true,
          })}
        />
        {errors.amount && (
          <p className={errorClass}>{errors.amount.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='category' className={labelClass}>
          Category
        </label>
        <select
          id='category'
          className={inputClass}
          {...register('category', { required: true })}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='type' className={labelClass}>
          Type
        </label>
        <select
          id='type'
          className={inputClass}
          {...register('type', { required: true })}
        >
          <option value='expense'>Expense</option>
          <option value='income'>Income</option>
        </select>
      </div>

      <AtButton type='submit' ariaLabel='log transaction' onClick={() => {}}>
        ☢️ Log Transaction
      </AtButton>
    </form>
  );
};
