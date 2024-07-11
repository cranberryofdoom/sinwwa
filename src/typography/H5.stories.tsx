import type { Meta, StoryObj } from "@storybook/react";
import { H5 } from "./H5";
import { argTypes } from "./meta";

const meta: Meta<typeof H5> = {
  ...argTypes,
  title: "Typography/H5",
  component: H5,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof H5> = {
  args: {
    children: "Heading 5",
  },
};
