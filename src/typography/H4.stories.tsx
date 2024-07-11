import type { Meta, StoryObj } from "@storybook/react";
import { H4 } from "./H4";
import { argTypes } from "./meta";

const meta: Meta<typeof H4> = {
  ...argTypes,
  title: "Typography/H4",
  component: H4,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof H4> = {
  args: {
    children: "Heading 4",
  },
};
