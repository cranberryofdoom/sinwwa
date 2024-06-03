import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Alerts/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;

export const Success: StoryObj<typeof Alert> = {
  args: {
    children:
      "We're letting you know that something went as expected and you don't have to worry about it.",
    variant: "success",
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    children:
      "We're letting you know that something happened, but no action is necessary.",
    variant: "warning",
  },
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    children:
      "We're letting you know that something went wrong and you should take action.",
    variant: "error",
  },
};
