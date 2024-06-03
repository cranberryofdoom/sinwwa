import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "./H2";

const meta: Meta<typeof H2> = {
  title: "Typography/H2",
  component: H2,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof H2> = {
  args: {
    children: "Heading 2",
  },
};

export const Uppercase: StoryObj<typeof H2> = {
  args: {
    ...Default.args,
    textTransform: "uppercase",
  },
};
