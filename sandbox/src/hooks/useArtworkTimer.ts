import { useCallback, useEffect, useRef, useState } from 'react';

const DURATION = 60;

export const useArtworkTimer = (onRotate: () => void) => {
  const [timeRemaining, setTimeRemaining] = useState(DURATION);
  const onRotateRef = useRef(onRotate);
  onRotateRef.current = onRotate;

  const reset = useCallback(() => setTimeRemaining(DURATION), []);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          onRotateRef.current();
          return DURATION;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return { timeRemaining, reset };
};
