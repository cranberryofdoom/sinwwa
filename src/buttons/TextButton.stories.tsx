import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./TextButton";

const meta: Meta<typeof TextButton> = {
  title: "Buttons/Text Button",
  component: TextButton,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof TextButton> = {
  args: {
    children: "Text",
    iconName: "TrackChanges",
  },
};

export const Loading: StoryObj<typeof TextButton> = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Black: StoryObj<typeof TextButton> = {
  args: {
    ...Default.args,
    iconColor: "accent-ash-gray",
  },
};
