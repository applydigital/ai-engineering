import { useEffect, useRef, useState } from "react";
import { sanitizeTailwindClassnames } from "../../utilities/sanitizeTailwindClassnames";

export interface AtBidTickerProps {
  bid: number;
  className?: string;
}

export const AtBidTicker = ({ bid, className = "" }: AtBidTickerProps) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const previousBid = useRef<number | null>(null);

  useEffect(() => {
    // Only flash if bid actually changed
    if (previousBid.current !== null && previousBid.current !== bid) {
      setIsFlashing(true);
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 500);

      previousBid.current = bid;
      return () => clearTimeout(timer);
    }

    previousBid.current = bid;
  }, [bid]);

  return (
    <h2
      className={sanitizeTailwindClassnames(
        `text-6xl font-bold transition-all duration-300 ${
          isFlashing
            ? "scale-110 text-green-400 animate-ping"
            : "scale-100 text-white"
        } ${className}`,
      )}
    >
      ${bid}
    </h2>
  );
};
