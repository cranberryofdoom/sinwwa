import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Tag> = {
  args: {
    children: "Pushed",
    color: "system-success-green",
  },
};

export const DarkText: StoryObj<typeof Tag> = {
  args: {
    ...Default.args,
    color: "system-caution-yellow",
    textColor: "dark",
  },
};
