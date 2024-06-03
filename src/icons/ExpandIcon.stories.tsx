import type { Meta, StoryObj } from "@storybook/react";

import { ExpandIcon } from "./ExpandIcon";

const meta: Meta<typeof ExpandIcon> = {
  title: "Icons/Expand Icon",
  component: ExpandIcon,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof ExpandIcon> = {
  args: {
    color: "black",
    size: "small",
    open: false,
  },
};
