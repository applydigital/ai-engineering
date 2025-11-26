import type { Meta, StoryObj } from "@storybook/react";
import { AtImage } from "./AtImage";

const meta = {
  title: "Atoms/AtImage",
  component: AtImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
    },
    src: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative p-8 bg-slate-800">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AtImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // biome-ignore lint: false flag secret
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop",
    alt: "Sample image",
  },
};
