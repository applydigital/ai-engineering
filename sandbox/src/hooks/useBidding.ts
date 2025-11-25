import { useState } from "react";

export const useBidding = (initialBid: number = 100) => {
  const [currentBid, setCurrentBid] = useState(initialBid);

  const submitBid = (bid: number) => {
    if (bid < currentBid) {
      setCurrentBid(bid);
    }
    return;
  };

  // Minimum bid is the higher of current bid or 100
  const minBid = Math.max(currentBid, 100);

  return {
    currentBid,
    submitBid,
    minBid,
  };
};
