import type { Meta, StoryFn } from "@storybook/react";
import { ButtonDropdown } from "./ButtonDropdown";

const meta: Meta<typeof ButtonDropdown> = {
  title: "Dropdowns/Button Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <ButtonDropdown.Root
      width={250}
      size="large"
      leftIconName="Help"
      variant="tertiary"
      label="I need help"
    >
      <ButtonDropdown.Item
        onClick={() => {
          alert("I can't find this invoice's distributor");
        }}
        name="I can't find this invoice's distributor"
        id="no-distributor"
      />
      <ButtonDropdown.Item
        onClick={() => {
          alert("I need help with something else");
        }}
        name="I need help with something else"
        id="help-something-else"
      />
    </ButtonDropdown.Root>
  );
};
