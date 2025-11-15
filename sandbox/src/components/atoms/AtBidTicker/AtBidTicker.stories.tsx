import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AtButton } from "../AtButton";
import { AtBidTicker } from "./AtBidTicker";

const meta = {
  title: "Atoms/AtBidTicker",
  component: AtBidTicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-12 bg-slate-800">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtBidTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bid: 100,
  },
};

const InteractiveExample = () => {
  const [bid, setBid] = useState(100);

  const increaseBid = () => {
    setBid((prev) => prev + 50);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <AtBidTicker bid={bid} />
      <AtButton type="button" ariaLabel="Increase bid" onClick={increaseBid}>
        Increase Bid by $50
      </AtButton>
    </div>
  );
};

export const Interactive: Story = {
  args: {
    bid: 100,
  },
  render: () => <InteractiveExample />,
};
