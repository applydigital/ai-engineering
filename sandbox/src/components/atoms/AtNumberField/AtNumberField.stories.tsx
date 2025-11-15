import type { Meta, StoryObj } from "@storybook/react";
import { AtNumberField } from "./AtNumberField";

const meta = {
  // biome-ignore lint: false flag secret
  title: "Atoms/AtNumberField",
  component: AtNumberField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-8 bg-slate-800">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtNumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Your Bid (CAD):",
    placeholder: "Enter your bid",
  },
};

export const WithError: Story = {
  args: {
    label: "Your Bid (CAD):",
    placeholder: "Enter your bid",
    error: "Most Amusing. Try again.",
  },
};
