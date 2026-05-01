import type { Meta, StoryObj } from '@storybook/react';
import { mockTransactions } from '@data/transactions';
import { MlTransactionList } from './MlTransactionList';

const meta = {
  title: 'Molecules/MlTransactionList',
  component: MlTransactionList,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-6 bg-stone-900 max-w-2xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MlTransactionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithData: Story = {
  args: { transactions: mockTransactions },
};

export const EmptyState: Story = {
  args: { transactions: [] },
};
