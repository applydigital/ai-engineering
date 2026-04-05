import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface BidTickerProps {
  bid: number;
}

export const BidTicker = ({ bid }: BidTickerProps) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const previousBid = useRef<number | null>(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (previousBid.current !== null && previousBid.current !== bid) {
      setIsFlashing(true);
      Animated.sequence([
        Animated.spring(scaleAnim, { toValue: 1.1, useNativeDriver: true, speed: 50, bounciness: 8 }),
        Animated.spring(scaleAnim, { toValue: 1.0, useNativeDriver: true, speed: 50, bounciness: 8 }),
      ]).start();
      const timer = setTimeout(() => setIsFlashing(false), 500);
      previousBid.current = bid;
      return () => clearTimeout(timer);
    }
    previousBid.current = bid;
  }, [bid, scaleAnim]);

  return (
    <Animated.Text
      style={[
        styles.text,
        isFlashing && styles.flashing,
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      ${bid}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  flashing: {
    color: '#4ade80',
  },
});
