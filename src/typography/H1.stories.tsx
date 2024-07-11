import type { Meta, StoryObj } from "@storybook/react";
import { H1 } from "./H1";
import { argTypes } from "./meta";

const meta: Meta<typeof H1> = {
  ...argTypes,
  title: "Typography/H1",
  component: H1,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof H1> = {
  args: {
    children: "Heading 1",
  },
};
