import { Meta, StoryObj } from "@storybook/react";
import { LocalIcon } from "src/assets/local-icon";
import { CardProduct } from "./card-product";

const meta = {
  component: CardProduct,
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof CardProduct>;

export const CardPink: Story = {
  args: {
    
  },
};
