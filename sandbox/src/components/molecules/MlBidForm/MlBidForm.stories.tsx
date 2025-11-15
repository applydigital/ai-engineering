import type { Meta, StoryObj } from "@storybook/react";
import { MlBidForm } from "./MlBidForm";

const meta = {
  title: "Molecules/MlBidForm",
  component: MlBidForm,
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
} satisfies Meta<typeof MlBidForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (bid) => alert(`Bid submitted: $${bid}`),
    minBid: 100,
  },
};
