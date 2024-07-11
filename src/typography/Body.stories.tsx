import type { Meta, StoryObj } from "@storybook/react";
import { Body } from "./Body";
import { argTypes } from "./meta";

const meta: Meta<typeof Body> = {
  ...argTypes,
  title: "Typography/Body",
  component: Body,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof Body> = {
  args: {
    children: "The quick brown fox jumped over the lazy dog.",
  },
};
