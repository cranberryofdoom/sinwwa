import type { Meta, StoryObj } from "@storybook/react";
import { Caption } from "./Caption";
import { argTypes } from "./meta";

const meta: Meta<typeof Caption> = {
  ...argTypes,
  title: "Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof Caption> = {
  args: {
    color: "accent-ash-gray",
    children: "The quick brown fox jumped over the lazy dog.",
  },
};
