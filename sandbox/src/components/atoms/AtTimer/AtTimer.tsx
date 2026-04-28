import { sanitizeTailwindClassnames } from "@utilities/sanitizeTailwindClassnames";

export interface AtTimerProps {
  timeRemaining: number;
  className?: string;
}

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export const AtTimer = ({ timeRemaining, className = "" }: AtTimerProps) => {
  return (
    <p className={sanitizeTailwindClassnames(`text-2xl font-bold text-white tabular-nums ${className}`)}>
      {formatTime(timeRemaining)}
    </p>
  );
};
