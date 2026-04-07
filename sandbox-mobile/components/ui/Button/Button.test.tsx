import { fireEvent, render, screen } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('renders label text', () => {
    render(<Button onPress={jest.fn()}>Submit Bid</Button>);

    expect(screen.getByText('Submit Bid')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPress = jest.fn();
    render(
      <Button onPress={onPress} ariaLabel="Submit bid">
        Submit Bid
      </Button>,
    );

    fireEvent.press(screen.getByLabelText('Submit bid'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
