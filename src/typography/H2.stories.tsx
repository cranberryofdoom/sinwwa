import type { Meta, StoryObj } from "@storybook/react";
import { H2 } from "./H2";
import { argTypes } from "./meta";

const meta: Meta<typeof H2> = {
  ...argTypes,
  title: "Typography/H2",
  component: H2,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof H2> = {
  args: {
    children: "Heading 2",
  },
};
