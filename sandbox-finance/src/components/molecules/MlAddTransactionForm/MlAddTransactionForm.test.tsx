import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { MlAddTransactionForm } from './MlAddTransactionForm';

describe('MlAddTransactionForm', () => {
  it('renders all form fields', () => {
    render(<MlAddTransactionForm onSubmit={vi.fn()} />);
    expect(screen.getByLabelText(/description/i)).toBeDefined();
    expect(screen.getByLabelText(/amount/i)).toBeDefined();
    expect(screen.getByLabelText(/category/i)).toBeDefined();
    expect(screen.getByLabelText(/type/i)).toBeDefined();
  });

  it('shows validation error when description is empty on submit', async () => {
    const user = userEvent.setup();
    render(<MlAddTransactionForm onSubmit={vi.fn()} />);

    await user.click(screen.getByRole('button', { name: /log transaction/i }));

    expect(await screen.findByText('Description is required')).toBeDefined();
  });

  it('shows validation error when amount is negative', async () => {
    const user = userEvent.setup();
    render(<MlAddTransactionForm onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText(/description/i), 'Test');
    await user.clear(screen.getByLabelText(/amount/i));
    await user.type(screen.getByLabelText(/amount/i), '-50');
    await user.click(screen.getByRole('button', { name: /log transaction/i }));

    expect(await screen.findByText('Amount must be positive')).toBeDefined();
  });

  it('calls onSubmit with correct data when form is valid', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<MlAddTransactionForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/description/i), 'Traded meds');
    await user.clear(screen.getByLabelText(/amount/i));
    await user.type(screen.getByLabelText(/amount/i), '75');
    await user.click(screen.getByRole('button', { name: /log transaction/i }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ description: 'Traded meds', amount: 75 }),
    );
  });
});
