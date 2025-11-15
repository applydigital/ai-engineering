import type { ReactNode } from "react";
import { sanitizeTailwindClassnames } from "../utilities/sanitizeTailwindClassnames";

interface GridProps {
  children: ReactNode;
  orientation: "horizontal" | "vertical";
  className?: string;
}

export const Grid = ({ children, orientation, className = "" }: GridProps) => {
  const gridClass =
    orientation === "horizontal"
      ? "grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1"
      : "grid-cols-1 grid-rows-2";

  return (
    <div
      className={sanitizeTailwindClassnames(
        `grid place-items-center-safe ${gridClass} ${className}`,
      )}
    >
      {children}
    </div>
  );
};
