import { useState } from "react";

export const useBidding = (initialBid: number = 100) => {
  const [currentBid, setCurrentBid] = useState(initialBid);

  const submitBid = (bid: number) => {
    if (bid > currentBid) {
      setCurrentBid(bid);
      alert(`Bid accepted: $${bid}`);
    } else {
      alert(`Bid must be higher than current bid of $${currentBid}`);
    }
  };

  // Minimum bid is the higher of current bid or 100
  const minBid = Math.max(currentBid, 100);

  return {
    currentBid,
    submitBid,
    minBid,
  };
};
