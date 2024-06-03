import type { Meta, StoryObj } from "@storybook/react";

import { Body } from "./Body";

const meta: Meta<typeof Body> = {
  title: "Typography/Body",
  component: Body,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Body> = {
  args: {
    children: "The quick brown fox jumped over the lazy dog.",
  },
};

export const Bold: StoryObj<typeof Body> = {
  args: {
    ...Default.args,
    weight: "bold",
  },
};
