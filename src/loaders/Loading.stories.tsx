import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Loaders/Loading",
  component: Loading,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Loading> = {
  args: {},
};

export const Small: StoryObj<typeof Loading> = {
  args: {
    size: "small",
  },
};

export const Medium: StoryObj<typeof Loading> = {
  args: {
    size: "medium",
  },
};

export const Large: StoryObj<typeof Loading> = {
  args: {
    size: "large",
  },
};

export const XLarge: StoryObj<typeof Loading> = {
  args: {
    size: "x-large",
  },
};
