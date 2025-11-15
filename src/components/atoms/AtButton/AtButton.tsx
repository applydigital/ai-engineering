import type { ReactNode } from "react";
import { sanitizeTailwindClassnames } from "../../utilities/sanitizeTailwindClassnames";

export interface AtButtonProps {
  children: ReactNode;
  type: "button" | "submit";
  ariaLabel: string;
  className?: string;
  onClick: () => void;
}

export const AtButton = ({
  children,
  type,
  ariaLabel,
  className = "",
  onClick,
}: AtButtonProps) => (
  <button
    className={sanitizeTailwindClassnames(`
        font-medium rounded-lg cursor-pointer
        transition-all duration-200 ease-in-out
        hover:-translate-y-0.5 active:translate-y-0
        backdrop-blur-md bg-white/60 text-gray-900 border border-gray-300/40 shadow-lg shadow-black/5 hover:bg-white/80 hover:shadow-black/10
        px-4 py-2 text-base
        w-8/12
        lg:w-6/12
        ${className}
      `)}
    type={type}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);
