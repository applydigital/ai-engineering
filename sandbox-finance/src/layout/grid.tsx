import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';
import type { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  orientation: 'horizontal' | 'vertical';
  className?: string;
}

export const Grid = ({ children, orientation, className = '' }: GridProps) => {
  const gridClass =
    orientation === 'horizontal'
      ? 'grid-cols-1 lg:grid-cols-2'
      : 'grid-cols-1';

  return (
    <div
      className={sanitizeTailwindClassnames(
        `grid gap-6 ${gridClass} ${className}`,
      )}
    >
      {children}
    </div>
  );
};
