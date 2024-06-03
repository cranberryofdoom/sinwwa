import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    ...Example.args,
    disabled: true,
  },
};

export const WithLeftIcon: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    leftIconName: "Search",
  },
};

export const WithRightIcon: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    rightIconName: "Close",
  },
};

export const WithClickableRightIcon: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    rightIconName: "Close",
    onClickRightIcon: () => alert("You clicked me!"),
  },
};

export const WithBothIcons: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    leftIconName: "Search",
    rightIconName: "Close",
  },
};
