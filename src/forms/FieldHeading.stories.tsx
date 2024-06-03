import type { Meta, StoryObj } from "@storybook/react";

import { FieldHeading } from "./FieldHeading";

const meta: Meta<typeof FieldHeading> = {
  title: "Forms/Field Heading",
  component: FieldHeading,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof FieldHeading> = {
  args: {
    children: "Heading",
  },
};

export const Optional: StoryObj<typeof FieldHeading> = {
  args: {
    ...Default.args,
    decoration: "optional",
  },
};

export const Required: StoryObj<typeof FieldHeading> = {
  args: {
    ...Default.args,
    decoration: "required",
  },
};
