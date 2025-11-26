import type { Meta, StoryObj } from "@storybook/react";
import { AtButton } from "./AtButton";

const meta = {
  title: "Atoms/AtButton",
  component: AtButton,
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
} satisfies Meta<typeof AtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    ariaLabel: "storybook button",
    type: "button",
    onClick: () => console.log("Button clicked"),
  },
};
