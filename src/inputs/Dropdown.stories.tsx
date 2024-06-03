import type { Meta, StoryFn } from "@storybook/react";
import * as Select from "@radix-ui/react-select";
import { Dropdown } from "../inputs";
import { useState } from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Inputs/Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <Dropdown.Root
      onValueChange={(value) => {
        alert(`Selected fruit changed to ${value}!`);
      }}
      placeholder="Select a fruit..."
    >
      <Dropdown.Item value="apple">Apple</Dropdown.Item>
      <Dropdown.Item value="banana">Banana</Dropdown.Item>
      <Select.Separator />
      <Dropdown.Item value="blueberry">Blueberry</Dropdown.Item>
      <Dropdown.Item disabled value="grapes">
        Grapes
      </Dropdown.Item>
      <Dropdown.Item value="pineapple">Pineapple</Dropdown.Item>
    </Dropdown.Root>
  );
};

export const Clearable: StoryFn = () => {
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  return (
    <Dropdown.Root
      value={selectedFruit || ""}
      onValueChange={(value) => {
        setSelectedFruit(value);
      }}
      onClear={() => setSelectedFruit(null)}
      placeholder="Select a fruit..."
    >
      <Dropdown.Item value="apple">Apple</Dropdown.Item>
      <Dropdown.Item value="banana">Banana</Dropdown.Item>
      <Select.Separator />
      <Dropdown.Item value="blueberry">Blueberry</Dropdown.Item>
      <Dropdown.Item disabled value="grapes">
        Grapes
      </Dropdown.Item>
      <Dropdown.Item value="pineapple">Pineapple</Dropdown.Item>
    </Dropdown.Root>
  );
};
