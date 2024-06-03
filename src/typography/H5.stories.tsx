import type { Meta, StoryObj } from "@storybook/react";

import { H5 } from "./H5";

const meta: Meta<typeof H5> = {
  title: "Typography/H5",
  component: H5,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof H5> = {
  args: {
    children: "Heading 5",
  },
};

export const Uppercase: StoryObj<typeof H5> = {
  args: {
    ...Default.args,
    textTransform: "uppercase",
  },
};
