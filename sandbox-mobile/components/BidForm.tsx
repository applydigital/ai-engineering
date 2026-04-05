import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './ui/Button';
import { NumberField } from './ui/NumberField';

interface BidFormProps {
  onSubmit: (bid: number) => void;
  minBid: number;
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '100%',
    alignItems: 'center',
  },
});

export const BidForm = ({ onSubmit, minBid }: BidFormProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const isTouched = useRef(false);

  useEffect(() => {
    if (isTouched.current && value !== '') {
      validate(value);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minBid]);

  const validate = (text: string): boolean => {
    if (!text.trim()) {
      setError('Kindly enter your Bid.');
      return false;
    }
    const num = Number(text);
    if (isNaN(num) || num < minBid) {
      setError('You need to beat the current bid.');
      return false;
    }
    setError('');
    return true;
  };

  const handleChangeText = (text: string) => {
    isTouched.current = true;
    setValue(text);
    if (error) {
      validate(text);
    }
  };

  const handleSubmit = () => {
    isTouched.current = true;
    if (validate(value)) {
      onSubmit(Number(value));
      setValue('');
      isTouched.current = false;
    }
  };

  return (
    <View style={styles.container}>
      <NumberField
        label="Your Bid (CAD):"
        value={value}
        onChangeText={handleChangeText}
        placeholder="Enter your bid"
        error={error}
      />
      <Button onPress={handleSubmit} ariaLabel="Submit bid">
        Submit Bid
      </Button>
    </View>
  );
};


