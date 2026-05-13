import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';

export type AtBadgeVariant = 'income' | 'expense' | 'category';

export interface AtBadgeProps {
  label: string;
  variant: AtBadgeVariant;
  className?: string;
}

const variantClasses: Record<AtBadgeVariant, string> = {
  income: 'bg-green-900/60 text-green-300 border-green-700/40',
  expense: 'bg-red-900/60 text-red-300 border-red-700/40',
  category: 'bg-stone-700/60 text-stone-300 border-stone-600/40',
};

export const AtBadge = ({ label, variant, className = '' }: AtBadgeProps) => (
  <span
    className={sanitizeTailwindClassnames(
      `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${variantClasses[variant]} ${className}`,
    )}
  >
    {label}
  </span>
);
