import { fireEvent, render, screen } from '@testing-library/react-native';
import { BidForm } from './BidForm';

describe('BidForm', () => {
  it('shows an error when submitting an empty bid', () => {
    const onSubmit = jest.fn();
    render(<BidForm minBid={101} onSubmit={onSubmit} />);

    fireEvent.press(screen.getByLabelText('Submit bid'));

    expect(screen.getByText('Kindly enter your Bid.')).toBeTruthy();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('shows an error when bid is below minimum', () => {
    const onSubmit = jest.fn();
    render(<BidForm minBid={101} onSubmit={onSubmit} />);

    fireEvent.changeText(screen.getByPlaceholderText('Enter your bid'), '90');
    fireEvent.press(screen.getByLabelText('Submit bid'));

    expect(screen.getByText('You need to beat the current bid.')).toBeTruthy();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits valid bid and clears field', () => {
    const onSubmit = jest.fn();
    render(<BidForm minBid={101} onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText('Enter your bid');
    fireEvent.changeText(input, '120');
    fireEvent.press(screen.getByLabelText('Submit bid'));

    expect(onSubmit).toHaveBeenCalledWith(120);
    expect(input.props.value).toBe('');
  });
});
