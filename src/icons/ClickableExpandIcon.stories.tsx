import type { Meta, StoryObj } from "@storybook/react";

import { ClickableExpandIcon } from "./ExpandIcon";

const meta: Meta<typeof ClickableExpandIcon> = {
  title: "Icons/Clickable Expand Icon",
  component: ClickableExpandIcon,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof ClickableExpandIcon> = {
  args: {
    color: "black",
    size: "small",
    open: false,
    onClick: () => {
      alert("Clicked!");
    },
  },
};
