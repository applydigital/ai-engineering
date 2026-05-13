import type { Meta, StoryObj } from '@storybook/react';
import { MlCategoryFilter } from './MlCategoryFilter';

const meta = {
  title: 'Molecules/MlCategoryFilter',
  component: MlCategoryFilter,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-6 bg-stone-900'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MlCategoryFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSelected: Story = {
  args: {
    activeCategory: 'All',
    onFilter: (cat) => console.log('Filter:', cat),
  },
};

export const WeaponsSelected: Story = {
  args: {
    activeCategory: 'Weapons',
    onFilter: (cat) => console.log('Filter:', cat),
  },
};
