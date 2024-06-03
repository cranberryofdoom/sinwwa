import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";
import { useState } from "react";

const meta: Meta<typeof DateInput> = {
  title: "Inputs/DateInput",
  component: DateInput,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryFn = () => {
  const [value, setValue] = useState<string>("");

  return <DateInput value={value} onChange={setValue} />;
};
