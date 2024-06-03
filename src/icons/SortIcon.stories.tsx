import type { Meta, StoryObj } from "@storybook/react";

import { SortIcon } from "./SortIcon";

const meta: Meta<typeof SortIcon> = {
  title: "Icons/Sort Icon",
  component: SortIcon,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof SortIcon> = {
  args: {
    onClick: () => {},
    size: "small",
  },
};
