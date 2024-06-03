import type { Meta, StoryObj } from "@storybook/react";

import { TextIcon } from "./TextIcon";

const meta: Meta<typeof TextIcon> = {
  title: "Icons/Text Icon",
  component: TextIcon,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof TextIcon> = {
  args: {
    name: "Crown",
    color: "system-caution-yellow",
    size: "small",
  },
};

export const Small: StoryObj<typeof TextIcon> = {
  args: {
    ...Default.args,
  },
};

export const Medium: StoryObj<typeof TextIcon> = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Large: StoryObj<typeof TextIcon> = {
  args: {
    ...Default.args,
    size: "large",
  },
};
