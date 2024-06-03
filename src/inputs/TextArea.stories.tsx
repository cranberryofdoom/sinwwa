import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryObj<typeof TextArea> = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: StoryObj<typeof TextArea> = {
  args: {
    ...Example.args,
    disabled: true,
  },
};
