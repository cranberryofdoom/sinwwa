import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icons/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
  args: {
    name: "Home",
    color: "black",
    size: "small",
  },
};

export const Small: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
  },
};

export const Medium: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Large: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const Black: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
  },
};

export const Gray: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    color: "gray",
  },
};

export const White: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    color: "white",
  },
};

export const Cyan: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    color: "cyan",
  },
};

export const Blue: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    color: "blue",
  },
};

export const Circle: StoryObj<typeof Icon> = {
  args: {
    ...Default.args,
    circle: true,
  },
};

export const CircleBlack: StoryObj<typeof Icon> = {
  args: {
    ...Circle.args,
  },
};

export const CircleGray: StoryObj<typeof Icon> = {
  args: {
    ...Circle.args,
    color: "gray",
  },
};

export const CircleWhite: StoryObj<typeof Icon> = {
  args: {
    ...Circle.args,
    color: "white",
  },
};

export const CircleCyan: StoryObj<typeof Icon> = {
  args: {
    ...Circle.args,
    color: "cyan",
  },
};

export const CircleBlue: StoryObj<typeof Icon> = {
  args: {
    ...Circle.args,
    color: "blue",
  },
};
