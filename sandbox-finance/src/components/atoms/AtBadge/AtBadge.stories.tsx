import type { Meta, StoryObj } from '@storybook/react';
import { AtBadge } from './AtBadge';

const meta = {
  title: 'Atoms/AtBadge',
  component: AtBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-8 bg-stone-900'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Income: Story = {
  args: { label: 'income', variant: 'income' },
};

export const Expense: Story = {
  args: { label: 'expense', variant: 'expense' },
};

export const Category: Story = {
  args: { label: 'Weapons', variant: 'category' },
};
