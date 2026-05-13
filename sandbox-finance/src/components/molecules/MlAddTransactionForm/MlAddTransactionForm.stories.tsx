import type { Meta, StoryObj } from '@storybook/react';
import { MlAddTransactionForm } from './MlAddTransactionForm';

const meta = {
  title: 'Molecules/MlAddTransactionForm',
  component: MlAddTransactionForm,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-6 bg-stone-900 max-w-sm'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MlAddTransactionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (tx) => console.log('Transaction logged:', tx),
  },
};
