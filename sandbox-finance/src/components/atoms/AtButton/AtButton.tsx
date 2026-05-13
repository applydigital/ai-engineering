import { sanitizeTailwindClassnames } from '@utilities/sanitizeTailwindClassnames';
import type { ReactNode } from 'react';

export interface AtButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  ariaLabel: string;
  className?: string;
  onClick: () => void;
}

export const AtButton = ({
  children,
  type,
  ariaLabel,
  className = '',
  onClick,
}: AtButtonProps) => (
  <button
    className={sanitizeTailwindClassnames(`
        font-medium rounded-lg cursor-pointer
        transition-all duration-200 ease-in-out
        hover:-translate-y-0.5 active:translate-y-0
        backdrop-blur-md bg-white/10 text-gray-100 border border-gray-600/40 shadow-lg shadow-black/20 hover:bg-white/20 hover:shadow-black/30
        px-4 py-2 text-base
        w-full
        ${className}
      `)}
    type={type}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);
