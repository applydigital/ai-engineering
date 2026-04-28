import { StyleSheet, View } from 'react-native';
import { BidTicker } from '../BidTicker';
import { Timer } from '../Timer';

interface BidInfoProps {
  bid: number;
  timeRemaining: number;
}

export const BidInfo = ({ bid, timeRemaining }: BidInfoProps) => {
  return (
    <View style={styles.container}>
      <BidTicker bid={bid} />
      <Timer timeRemaining={timeRemaining} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
  },
});
