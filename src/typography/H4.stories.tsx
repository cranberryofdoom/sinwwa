import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "./H4";

const meta: Meta<typeof H4> = {
  title: "Typography/H4",
  component: H4,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof H4> = {
  args: {
    children: "Heading 4",
  },
};

export const Uppercase: StoryObj<typeof H4> = {
  args: {
    ...Default.args,
    textTransform: "uppercase",
  },
};
