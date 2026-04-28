import { AtBidTicker } from "@components/atoms/AtBidTicker";
import { AtTimer } from "@components/atoms/AtTimer";
import { sanitizeTailwindClassnames } from "@utilities/sanitizeTailwindClassnames";

export interface MlBidInfoProps {
  bid: number;
  timeRemaining: number;
  className?: string;
}

export const MlBidInfo = ({ bid, timeRemaining, className = "" }: MlBidInfoProps) => {
  return (
    <div className={sanitizeTailwindClassnames(`flex flex-col items-center gap-2 ${className}`)}>
      <AtBidTicker bid={bid} />
      <AtTimer timeRemaining={timeRemaining} />
    </div>
  );
};
