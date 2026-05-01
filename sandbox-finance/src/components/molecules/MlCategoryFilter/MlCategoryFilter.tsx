import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';
import { CATEGORIES, type Category } from '@data/transactions';

export interface MlCategoryFilterProps {
  activeCategory: Category | 'All';
  onFilter: (category: Category | 'All') => void;
}

export const MlCategoryFilter = ({
  activeCategory,
  onFilter,
}: MlCategoryFilterProps) => {
  const all = ['All', ...CATEGORIES] as const;

  return (
    <div className='flex flex-wrap gap-2' role='group' aria-label='Filter by category'>
      {all.map((cat) => (
        <button
          key={cat}
          type='button'
          onClick={() => onFilter(cat as Category | 'All')}
          className={sanitizeTailwindClassnames(
            `px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              activeCategory === cat
                ? 'bg-green-700 border-green-500 text-white'
                : 'bg-stone-800 border-stone-600 text-stone-400 hover:border-stone-400 hover:text-stone-200'
            }`,
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
