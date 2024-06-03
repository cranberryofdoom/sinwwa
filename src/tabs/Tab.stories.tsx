import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Tabs/Tab",
  component: Tab,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Tab> = {
  args: {
    name: "tab1",
    label: "Tab 1",
    onClick: (value) => {
      alert(`Clicked ${value}`);
    },
  },
};

export const Active: StoryObj<typeof Tab> = {
  args: {
    name: "tab2",
    label: "Tab 2",
    active: true,
    onClick: (value) => {
      alert(`Clicked ${value}`);
    },
  },
};
