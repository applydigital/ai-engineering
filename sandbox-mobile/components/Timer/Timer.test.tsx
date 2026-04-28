import { render, screen } from '@testing-library/react-native';
import { Timer } from './Timer';

describe('Timer', () => {
  it('renders 00:45 when timeRemaining is 45', () => {
    render(<Timer timeRemaining={45} />);
    expect(screen.getByText('00:45')).toBeTruthy();
  });

  it('renders 01:00 when timeRemaining is 60', () => {
    render(<Timer timeRemaining={60} />);
    expect(screen.getByText('01:00')).toBeTruthy();
  });

  it('renders 00:00 when timeRemaining is 0', () => {
    render(<Timer timeRemaining={0} />);
    expect(screen.getByText('00:00')).toBeTruthy();
  });

  it('pads single-digit seconds with leading zero', () => {
    render(<Timer timeRemaining={9} />);
    expect(screen.getByText('00:09')).toBeTruthy();
  });
});
