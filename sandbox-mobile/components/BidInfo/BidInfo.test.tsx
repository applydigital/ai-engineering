import { render, screen } from '@testing-library/react-native';
import { BidInfo } from './BidInfo';

describe('BidInfo', () => {
  it('renders the bid amount', () => {
    render(<BidInfo bid={500} timeRemaining={30} />);
    expect(screen.getByText('$500')).toBeTruthy();
  });

  it('renders the countdown time', () => {
    render(<BidInfo bid={500} timeRemaining={30} />);
    expect(screen.getByText('00:30')).toBeTruthy();
  });

  it('passes correct props to both child components', () => {
    render(<BidInfo bid={250} timeRemaining={45} />);
    expect(screen.getByText('$250')).toBeTruthy();
    expect(screen.getByText('00:45')).toBeTruthy();
  });
});
