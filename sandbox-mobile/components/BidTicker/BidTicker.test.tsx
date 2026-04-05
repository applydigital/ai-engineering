import { render, screen } from '@testing-library/react-native';
import { BidTicker } from './BidTicker';

describe('BidTicker', () => {
  it('renders current bid text', () => {
    render(<BidTicker bid={100} />);

    expect(screen.getByText('$100')).toBeTruthy();
  });

  it('updates rendered bid text on rerender', () => {
    const { rerender } = render(<BidTicker bid={100} />);

    rerender(<BidTicker bid={150} />);

    expect(screen.getByText('$150')).toBeTruthy();
  });
});
