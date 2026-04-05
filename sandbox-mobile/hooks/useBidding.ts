import { useState } from 'react';

export const useBidding = (initialBid: number = 100) => {
  const [currentBid, setCurrentBid] = useState(initialBid);

  const submitBid = (bid: number) => {
    if (bid < currentBid) {
      setCurrentBid(bid);
    }
  };

  const minBid = currentBid + 1;

  return {
    currentBid,
    submitBid,
    minBid,
  };
};