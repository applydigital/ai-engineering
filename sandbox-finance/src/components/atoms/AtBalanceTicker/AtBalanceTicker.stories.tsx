import type { Meta, StoryObj } from '@storybook/react';
import { AtBalanceTicker } from './AtBalanceTicker';

const meta = {
  title: 'Atoms/AtBalanceTicker',
  component: AtBalanceTicker,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-8 bg-stone-900'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtBalanceTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: { balance: 890 },
};

export const Negative: Story = {
  args: { balance: -200 },
};

export const BuggyNaN: Story = {
  name: '⚠️ BUG: NaN Balance',
  args: { balance: Number.NaN },
};
