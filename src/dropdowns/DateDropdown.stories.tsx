import type { Meta, StoryFn } from "@storybook/react";
import { DateDropdown } from "./DateDropdown";
import { Range } from "react-date-range";
import { useState } from "react";

const meta: Meta<typeof DateDropdown> = {
  title: "Dropdowns/Date Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  const [value, setValue] = useState<Range[] | undefined>();

  return (
    <DateDropdown
      value={value}
      onReset={() => {
        setValue(undefined);
      }}
      onApplyChanges={(selectedDates) => {
        setValue(selectedDates);
      }}
    />
  );
};
