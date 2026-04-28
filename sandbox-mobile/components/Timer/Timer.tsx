import { StyleSheet, Text } from 'react-native';

interface TimerProps {
  timeRemaining: number;
}

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export const Timer = ({ timeRemaining }: TimerProps) => {
  return <Text style={styles.text}>{formatTime(timeRemaining)}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
