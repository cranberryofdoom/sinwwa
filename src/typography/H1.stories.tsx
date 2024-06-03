import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "./H1";

const meta: Meta<typeof H1> = {
  title: "Typography/H1",
  component: H1,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof H1> = {
  args: {
    children: "Heading 1",
  },
};

export const Uppercase: StoryObj<typeof H1> = {
  args: {
    ...Default.args,
    textTransform: "uppercase",
  },
};
