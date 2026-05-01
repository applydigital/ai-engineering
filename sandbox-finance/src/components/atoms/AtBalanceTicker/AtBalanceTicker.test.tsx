import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AtBalanceTicker } from './AtBalanceTicker';

describe('AtBalanceTicker', () => {
  it('renders a positive balance with green color', () => {
    render(<AtBalanceTicker balance={890} />);
    const el = screen.getByText('$890');
    expect(el.className).toContain('text-green-400');
  });

  it('renders a negative balance with red color', () => {
    render(<AtBalanceTicker balance={-50} />);
    const el = screen.getByText('$-50');
    expect(el.className).toContain('text-red-400');
  });

  it('renders NaN balance as $ ??? with red color', () => {
    render(<AtBalanceTicker balance={Number.NaN} />);
    const el = screen.getByText('$ ???');
    expect(el.className).toContain('text-red-400');
  });
});
