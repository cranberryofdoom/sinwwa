import type { Meta, StoryFn } from "@storybook/react";
import * as Select from "@radix-ui/react-select";
import { TextDropdown } from "./TextDropdown";

const meta: Meta<typeof TextDropdown> = {
  title: "Dropdowns/Text Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <TextDropdown.Root
      onValueChange={(value) => {
        alert(`Selected fruit changed to ${value}!`);
      }}
      placeholder="Select a fruit..."
    >
      <TextDropdown.Item value="apple">Apple</TextDropdown.Item>
      <TextDropdown.Item value="banana">Banana</TextDropdown.Item>
      <TextDropdown.Item value="blueberry">Blueberry</TextDropdown.Item>
      <TextDropdown.Item value="grapes">Grapes</TextDropdown.Item>
      <TextDropdown.Item value="pineapple">Pineapple</TextDropdown.Item>
      <TextDropdown.Separator />
      <TextDropdown.Item value="aubergine">Aubergine</TextDropdown.Item>
      <TextDropdown.Item value="broccoli">Broccoli</TextDropdown.Item>
      <TextDropdown.Item value="carrot" disabled>
        Carrot
      </TextDropdown.Item>
      <TextDropdown.Item value="courgette">Courgette</TextDropdown.Item>
      <TextDropdown.Item value="leek">Leek</TextDropdown.Item>
    </TextDropdown.Root>
  );
};
