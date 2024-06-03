import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Switches/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: {
    label: "Airplane Mode",
  },
};
