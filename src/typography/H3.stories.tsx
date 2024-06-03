import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "./H3";

const meta: Meta<typeof H3> = {
  title: "Typography/H3",
  component: H3,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof H3> = {
  args: {
    children: "Heading 3",
  },
};

export const Uppercase: StoryObj<typeof H3> = {
  args: {
    ...Default.args,
    textTransform: "uppercase",
  },
};
