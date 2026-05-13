import type { Meta, StoryObj } from '@storybook/react';
import { AtButton } from './AtButton';

const meta = {
  title: 'Atoms/AtButton',
  component: AtButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-8 bg-stone-900'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Add Transaction',
    ariaLabel: 'add transaction button',
    type: 'button',
    onClick: () => {},
  },
};

export const Submit: Story = {
  args: {
    children: 'Log Expenditure',
    ariaLabel: 'submit button',
    type: 'submit',
    onClick: () => {},
  },
};
