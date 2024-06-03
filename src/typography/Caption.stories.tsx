import type { Meta, StoryObj } from "@storybook/react";

import { Caption } from "./Caption";

const meta: Meta<typeof Caption> = {
  title: "Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Caption> = {
  args: {
    color: "accent-ash-gray",
    children: "The quick brown fox jumped over the lazy dog.",
  },
};

export const Bold: StoryObj<typeof Caption> = {
  args: {
    ...Default.args,
    weight: "bold",
  },
};
