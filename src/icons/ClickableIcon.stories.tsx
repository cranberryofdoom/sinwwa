import type { Meta, StoryObj } from "@storybook/react";

import { ClickableIcon } from "./ClickableIcon";

const meta: Meta<typeof ClickableIcon> = {
  title: "Icons/Clickable Icon",
  component: ClickableIcon,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof ClickableIcon> = {
  args: {
    name: "Crown",
    color: "black",
    size: "small",
    label: "Crown",
    onClick: () => alert("I've been clicked!"),
  },
};
