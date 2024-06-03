import type { Meta, StoryFn } from "@storybook/react";
import { IconDropdown } from "./IconDropdown";

const meta: Meta<typeof IconDropdown> = {
  title: "Dropdowns/Icon Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <IconDropdown.Root
      width={168}
      label="Add a fruit"
      iconName="AddCircleOutline"
    >
      <IconDropdown.Item
        onClick={() => {
          alert("You've selected apple!");
        }}
        id="apple"
        name="Apple"
      />
      <IconDropdown.Item
        onClick={() => {
          alert("You've selected banana!");
        }}
        id="banana"
        name="Banana"
      />
      <IconDropdown.Item
        onClick={() => {
          alert("You've selected blueberry!");
        }}
        id="blueberry"
        name="Blueberry"
      />
    </IconDropdown.Root>
  );
};
