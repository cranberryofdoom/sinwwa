import type { Meta, StoryFn } from "@storybook/react";
import { Dropdown, SearchableDropdown } from "../inputs";
import { useState } from "react";

const meta: Meta<typeof Dropdown> = {
  title: "Inputs/Searchable Dropdown",
};

export default meta;

export const Example: StoryFn = () => {
  const [vegetable, setVegetable] = useState("");

  return (
    <SearchableDropdown
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
  );
};

export const Loading: StoryFn = () => {
  const [vegetable, setVegetable] = useState("");

  return (
    <SearchableDropdown
      placeholder="Find a vegetable..."
      results={[]}
      isLoading
      onSelectOption={setVegetable}
      value={vegetable}
    />
  );
};

export const Empty: StoryFn = () => {
  const [vegetable, setVegetable] = useState("");

  return (
    <SearchableDropdown
      placeholder="Find a vegetable..."
      results={[]}
      onSelectOption={setVegetable}
      value={vegetable}
    />
  );
};
