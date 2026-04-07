import { fireEvent, render, screen } from '@testing-library/react-native';
import { NumberField } from './NumberField';

describe('NumberField', () => {
  it('renders label and placeholder', () => {
    render(
      <NumberField
        label="Your Bid (CAD):"
        value=""
        onChangeText={jest.fn()}
        placeholder="Enter your bid"
      />,
    );

    expect(screen.getByText('Your Bid (CAD):')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter your bid')).toBeTruthy();
  });

  it('calls onChangeText when value changes', () => {
    const onChangeText = jest.fn();
    render(
      <NumberField
        label="Your Bid (CAD):"
        value=""
        onChangeText={onChangeText}
        placeholder="Enter your bid"
      />,
    );

    fireEvent.changeText(screen.getByPlaceholderText('Enter your bid'), '150');

    expect(onChangeText).toHaveBeenCalledWith('150');
  });

  it('shows error text when error is provided', () => {
    render(
      <NumberField
        label="Your Bid (CAD):"
        value="80"
        onChangeText={jest.fn()}
        error="You need to beat the current bid."
      />,
    );

    expect(screen.getByText('You need to beat the current bid.')).toBeTruthy();
  });
});
