import type { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Tabs/Tabs",
};

export default meta;

export const Example: StoryFn = () => {
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
