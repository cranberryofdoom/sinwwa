import type { Meta, StoryFn } from "@storybook/react";
import * as Select from "@radix-ui/react-select";
import { Form } from "./Form";
import { Button } from "../buttons";
import { Dropdown } from "../inputs";
import { useState } from "react";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <Form.Root
      onSubmit={(value) => {
        alert(
          `You've submitted the following! \n name: ${value.name} \n email: ${value.email}`,
        );
      }}
    >
      <Form.InputField
        value="Ashley"
        name="name"
        heading="Name"
        error="Incorrect name."
      />
      <Form.InputField
        placeholder="ashley@savorops.com"
        name="email"
        heading="Email"
        type="email"
        validations={{
          typeMismatch: "Invalid email format.",
        }}
      />
      <Form.Submit>
        <Button size="large">Submit</Button>
      </Form.Submit>
    </Form.Root>
  );
};

export const Complex: StoryFn = () => {
  const [fruit, setFruit] = useState("");
  const [vegetable, setVegetable] = useState("");
  const [date, setDate] = useState("");

  return (
    <Form.Root
      onSubmit={(value) => {
        alert(
          `You've submitted the following! \n name: ${value.name} \n fruit - ${fruit} \n vegetable - ${vegetable} \n email: ${value.email} \n start date: ${value.start_date} \n end date: ${value.end_date}`,
        );
      }}
    >
      <Form.InputField
        value="Ashley"
        name="name"
        heading="Name"
        error="Incorrect name."
      />
      <Form.Field heading="Fruit" name="fruit">
        <Dropdown.Root onValueChange={setFruit} placeholder="Select a fruit...">
          <Dropdown.Item value="apple">Apple</Dropdown.Item>
          <Dropdown.Item value="banana">Banana</Dropdown.Item>
          <Dropdown.Item value="blueberry">Blueberry</Dropdown.Item>
          <Dropdown.Item value="grapes" disabled>
            Grapes
          </Dropdown.Item>
          <Dropdown.Item value="pineapple">Pineapple</Dropdown.Item>
          <Select.Separator />
        </Dropdown.Root>
      </Form.Field>
      <Form.SearchableDropdownField
        heading="Vegetable"
        name="vegetable"
        required
        validations={{
          valueMissing: "Vegetable is required.",
        }}
        placeholder="Find a vegetable..."
        results={[
          { id: "Beans", name: "Beans" },
          { id: "Beetroot", name: "Beetroot" },
          { id: "Butternut Squash", name: "Butternut Squash" },
          { id: "Carrot", name: "Carrot" },
          { id: "Chickpeas", name: "Chickpeas" },
          { id: "Chilli", name: "Chilli" },
          { id: "Courgette", name: "Courgette" },
          { id: "Cucumber", name: "Cucumber" },
          { id: "Garlic", name: "Garlic" },
          { id: "Ginger", name: "Ginger" },
          { id: "Lentils", name: "Lentils" },
          { id: "Lettuce", name: "Lettuce" },
          { id: "Mushroom", name: "Mushroom" },
          { id: "Onion", name: "Onion" },
          { id: "Parsnip", name: "Parsnip" },
          { id: "Peas", name: "Peas" },
          { id: "Pepper", name: "Pepper" },
          { id: "Potato", name: "Potato" },
          { id: "Pumpkin", name: "Pumpkin" },
          { id: "Radish", name: "Radish" },
          { id: "Rocket", name: "Rocket" },
          { id: "Sweet Potato", name: "Sweet Potato" },
          { id: "Tomato", name: "Tomato" },
          { id: "Turnip", name: "Turnip" },
          { id: "Watercress", name: "Watercress" },
        ]}
        onSelectOption={setVegetable}
        value={vegetable}
      />
      <Form.InputField
        placeholder="ashley@savorops.com"
        name="email"
        heading="Email"
        type="email"
        validations={{
          typeMismatch: "Invalid email format.",
        }}
      />
      <Form.DateInputField
        name="birthday"
        heading="Birthday"
        value={date}
        onChange={setDate}
      />
      <Form.Submit>
        <Button size="large">Submit</Button>
      </Form.Submit>
    </Form.Root>
  );
};
