import type { ReactNode } from "react";
import { sanitizeTailwindClassnames } from "../utilities/sanitizeTailwindClassnames";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={sanitizeTailwindClassnames(
        `mx-auto px-4 sm:px-6 lg:px-8 max-w-8/12 ${className} h-screen w-screen place-content-center-safe`,
      )}
    >
      {children}
    </div>
  );
}
