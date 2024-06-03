import "@testing-library/jest-dom";
import {
  ChecklistSelectableData,
  getAllOptions,
  getAllSelectableValues,
  getSelectedValues,
  hasSearchTerm,
  isChecked,
} from "./ChecklistDropdown";

describe("isChecked", () => {
  it("should return true if it is selected", () => {
    const data = {
      id: "1",
      label: "1",
    };
    const selectedValues = ["1"];
    expect(isChecked(data, selectedValues)).toBe(true);
  });

  it("should return false if it is not selected", () => {
    const data = {
      id: "1",
      label: "1",
    };
    const selectedValues = [] as ChecklistSelectableData["id"][];
    expect(isChecked(data, selectedValues)).toBe(false);
  });

  it("should return true if all children are checked for single layered nesting", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        { id: "1.1", label: "1.1" },
        { id: "1.2", label: "1.2" },
      ],
    };
    const selectedValues = ["1.1", "1.2"];
    expect(isChecked(data, selectedValues)).toBe(true);
  });

  it("should return false if not all children are checked for single layered nesting", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        { id: "1.1", label: "1.1" },
        { id: "1.2", label: "1.2" },
      ],
    };
    const selectedValues = ["1.1"];
    expect(isChecked(data, selectedValues)).toBe(false);
  });

  it("should return true if all children are checked for multi layered nesting", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        {
          id: "1.1",
          label: "1.1",
          children: [
            { id: "1.1.1", label: "1.1.1" },
            { id: "1.1.2", label: "1.1.2" },
          ],
        },
      ],
    };
    const selectedValues = ["1.1.1", "1.1.2"];
    expect(isChecked(data, selectedValues)).toBe(true);
  });

  it("should return false if not all children are checked for multi layered nesting", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        {
          id: "1.1",
          label: "1.1",
          children: [
            { id: "1.1.1", label: "1.1.1" },
            { id: "1.1.2", label: "1.1.2" },
          ],
        },
      ],
    };
    const selectedValues = ["1.1.1"];
    expect(isChecked(data, selectedValues)).toBe(false);
  });
});

describe("getSelectedValues", () => {
  it("should add itself to the array of selected values if it is not already selected", () => {
    const data = {
      id: "1",
      label: "1",
    };
    const selectedValues = [] as ChecklistSelectableData["id"][];
    expect(getSelectedValues(data, selectedValues)).toEqual(["1"]);
  });

  it("should remove itself from the array of selected values if it is already selected", () => {
    const data = {
      id: "1",
      label: "1",
    };
    const selectedValues = ["1"];
    expect(getSelectedValues(data, selectedValues)).toEqual([]);
  });

  it("should add all children to the array of selected values if no children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        { id: "1.1", label: "1.1" },
        { id: "1.2", label: "1.2" },
      ],
    };
    const selectedValues = [] as ChecklistSelectableData["id"][];
    expect(getSelectedValues(data, selectedValues)).toEqual(["1.1", "1.2"]);
  });

  it("should add the remaining children to the array of selected values if some children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        { id: "1.1", label: "1.1" },
        { id: "1.2", label: "1.2" },
      ],
    };
    const selectedValues = ["1.1"];
    expect(getSelectedValues(data, selectedValues)).toEqual(["1.1", "1.2"]);
  });

  it("should remove all children from the array of selected values if all children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        { id: "1.1", label: "1.1" },
        { id: "1.2", label: "1.2" },
      ],
    };
    const selectedValues = ["1.1", "1.2"];
    expect(getSelectedValues(data, selectedValues)).toEqual([]);
  });

  it("should add all deeply nested children to the array of selected values if no children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        {
          id: "1.1",
          label: "1.1",
          children: [
            { id: "1.1.1", label: "1.1.1" },
            { id: "1.1.2", label: "1.1.2" },
          ],
        },
      ],
    };
    const selectedValues = [] as ChecklistSelectableData["id"][];
    expect(getSelectedValues(data, selectedValues)).toEqual(["1.1.1", "1.1.2"]);
  });

  it("should add the remaining deeply nested children to the array of selected values if some children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        {
          id: "1.1",
          label: "1.1",
          children: [
            { id: "1.1.1", label: "1.1.1" },
            { id: "1.1.2", label: "1.1.2" },
          ],
        },
      ],
    };
    const selectedValues = ["1.1.1"];
    expect(getSelectedValues(data, selectedValues)).toEqual(["1.1.1", "1.1.2"]);
  });

  it("should remove all deeply nested children from the array of selected values if all children are already selected", () => {
    const data = {
      id: "1",
      label: "1",
      children: [
        {
          id: "1.1",
          label: "1.1",
          children: [
            { id: "1.1.1", label: "1.1.1" },
            { id: "1.1.2", label: "1.1.2" },
          ],
        },
      ],
    };
    const selectedValues = ["1.1.1", "1.1.2"];
    expect(getSelectedValues(data, selectedValues)).toEqual([]);
  });
});

describe("getAllSelectableValues", () => {
  it("should return all selectable values", () => {
    const data = [
      {
        id: "1",
        label: "1",
      },
    ];
    expect(getAllSelectableValues(data)).toEqual(["1"]);
  });

  it("should return all child values for nested data", () => {
    const data = [
      {
        id: "1",
        label: "1",
        children: [
          { id: "1.1", label: "1.1" },
          { id: "1.2", label: "1.2" },
        ],
      },
    ];
    expect(getAllSelectableValues(data)).toEqual(["1.1", "1.2"]);
  });

  it("should return all deeply nested child values for deeply nested data", () => {
    const data = [
      {
        id: "1",
        label: "1",
        children: [
          {
            id: "1.1",
            label: "1.1",
            children: [
              { id: "1.1.1", label: "1.1.1" },
              { id: "1.1.2", label: "1.1.2" },
            ],
          },
        ],
      },
    ];
    expect(getAllSelectableValues(data)).toEqual(["1.1.1", "1.1.2"]);
  });
});

describe("hasSearchTerm", () => {
  it("should return true if the label includes the search term", () => {
    const data = {
      id: "Food",
      label: "Food",
    };
    const searchTerm = "Foo";
    expect(hasSearchTerm(data, searchTerm)).toBe(true);
  });

  it("should return false if the label does not include the search term", () => {
    const data = {
      id: "Food",
      label: "Food",
    };
    const searchTerm = "Bar";
    expect(hasSearchTerm(data, searchTerm)).toBe(false);
  });

  it("should return true regardless of casing of search term", () => {
    const data = {
      id: "Food",
      label: "Food",
    };
    const searchTerm = "foo";
    expect(hasSearchTerm(data, searchTerm)).toBe(true);
  });

  it("should return true regardless of casing of label", () => {
    const data = {
      id: "food",
      label: "food",
    };
    const searchTerm = "FOO";
    expect(hasSearchTerm(data, searchTerm)).toBe(true);
  });

  it("should return true itself or children of any level includes the search term", () => {
    const data = {
      id: "Food",
      label: "Food",
      children: [
        {
          id: "Fruit",
          label: "Fruit",
          children: [{ id: "Apple", label: "Apple" }],
        },
        { id: "Vegetables", label: "Vegetables" },
      ],
    };
    expect(hasSearchTerm(data, "Foo")).toBe(true);
    expect(hasSearchTerm(data, "Frui")).toBe(true);
    expect(hasSearchTerm(data, "Appl")).toBe(true);
  });
});

describe("getAllOptions", () => {
  it("should return an empty array if options and selected options are undefined", () => {
    const options = undefined;
    const selectedOptions = undefined;
    expect(getAllOptions(options, selectedOptions)).toEqual([]);
  });

  it("should return an empty array if options and selected options are empty", () => {
    const options = [] as { id: string | number; label: string }[];
    const selectedOptions = [] as { id: string | number; label: string }[];
    expect(getAllOptions(options, selectedOptions)).toEqual([]);
  });

  it("should return empty array if one of the options are undefined", () => {
    const options = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    const selectedOptions = undefined;
    expect(getAllOptions(options, selectedOptions)).toEqual([]);
  });

  it("should return options even if selected options are empty", () => {
    const options = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    const selectedOptions = [] as { id: string | number; label: string }[];
    expect(getAllOptions(options, selectedOptions)).toEqual([
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ]);
  });

  it("should return selected options even if options are empty", () => {
    const options = [] as { id: string | number; label: string }[];
    const selectedOptions = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    expect(getAllOptions(options, selectedOptions)).toEqual([
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ]);
  });

  it("should return both options and selected options", () => {
    const options = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    const selectedOptions = [
      { id: "3", label: "3" },
      { id: "4", label: "4" },
    ];
    expect(getAllOptions(options, selectedOptions)).toEqual([
      { id: "1", label: "1" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
      { id: "4", label: "4" },
    ]);
  });

  it("should return both options and selected options without duplicates", () => {
    const options = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    const selectedOptions = [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ];
    expect(getAllOptions(options, selectedOptions)).toEqual([
      { id: "1", label: "1" },
      { id: "2", label: "2" },
    ]);
  });
});
