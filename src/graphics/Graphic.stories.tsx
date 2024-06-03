import type { Meta, StoryObj } from "@storybook/react";

import { Graphic } from "./Graphic";

const meta: Meta<typeof Graphic> = {
  title: "Graphics/Graphic",
  component: Graphic,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof Graphic> = {
  args: {
    name: "Cat",
  },
};

export const Mobile: StoryObj<typeof Graphic> = {
  args: {
    ...Example.args,
    mobile: true,
  },
};
