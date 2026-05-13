import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AtBadge } from './AtBadge';

describe('AtBadge', () => {
  it('renders the label', () => {
    render(<AtBadge label='Weapons' variant='category' />);
    expect(screen.getByText('Weapons')).toBeDefined();
  });

  it('applies green classes for income variant', () => {
    render(<AtBadge label='Income' variant='income' />);
    const badge = screen.getByText('Income');
    expect(badge.className).toContain('text-green-300');
  });

  it('applies red classes for expense variant', () => {
    render(<AtBadge label='Expense' variant='expense' />);
    const badge = screen.getByText('Expense');
    expect(badge.className).toContain('text-red-300');
  });

  it('applies gray classes for category variant', () => {
    render(<AtBadge label='Supplies' variant='category' />);
    const badge = screen.getByText('Supplies');
    expect(badge.className).toContain('text-stone-300');
  });
});
