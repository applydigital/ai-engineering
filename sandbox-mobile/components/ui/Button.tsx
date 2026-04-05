import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  children: string;
  onPress: () => void;
  ariaLabel?: string;
}

export const Button = ({ children, onPress, ariaLabel }: ButtonProps) => (
  <Pressable
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    onPress={onPress}
    accessibilityLabel={ariaLabel}
    accessibilityRole="button"
  >
    <Text style={styles.text}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(209, 213, 219, 0.4)',
    width: '66%',
    alignSelf: 'center',
  },
  pressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    transform: [{ translateY: 1 }],
  },
  text: {
    color: '#111827',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
  },
});
