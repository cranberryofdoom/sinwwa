import type { Meta, StoryObj } from "@storybook/react";
import { Clickable } from "./Clickable";
import { Body, Caption } from "../typography";

const meta: Meta<typeof Clickable> = {
  title: "Buttons/Clickable",
  component: Clickable,
  tags: ["autodocs"],
};

export default meta;

export const ClickableBody: StoryObj<typeof Clickable> = {
  args: {
    label: "Text",
    onClick: () => alert("I've been clicked!"),
    children: <Body color="base-black">Text</Body>,
  },
};

export const ClickableCaption: StoryObj<typeof Clickable> = {
  args: {
    label: "Text",
    onClick: () => alert("I've been clicked!"),
    children: <Caption color="base-black">Text</Caption>,
  },
};
