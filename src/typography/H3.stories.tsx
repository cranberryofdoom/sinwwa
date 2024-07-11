import type { Meta, StoryObj } from "@storybook/react";
import { H3 } from "./H3";
import { argTypes } from "./meta";

const meta: Meta<typeof H3> = {
  ...argTypes,
  title: "Typography/H3",
  component: H3,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof H3> = {
  args: {
    children: "Heading 3",
  },
};
