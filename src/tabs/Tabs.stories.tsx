import type { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";
import { useState } from "react";
import { Tab } from "./Tab";

const meta: Meta<typeof Tabs.Root> = {
  title: "Tabs/Tabs",
  component: Tabs.Root,
  tags: ["autodocs"],
  subcomponents: { Tab } as {},
};

export default meta;

export const Example: StoryFn<typeof Tabs.Root> = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <Tabs.Root>
      <Tabs.Tab
        label="Tab 1"
        name="tab1"
        active={selectedTab === "tab1"}
        onClick={setSelectedTab}
      />
      <Tabs.Tab
        label="Tab 2"
        name="tab2"
        active={selectedTab === "tab2"}
        onClick={setSelectedTab}
      />
    </Tabs.Root>
  );
};
