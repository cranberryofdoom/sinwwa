import styles from "./ChecklistDropdown.module.css";
import { useEffect, useRef, useState } from "react";
import { DropdownToggle } from "./DropdownToggle";
import { useClickOutside, useHandleScrollInfiniteScroll } from "../hooks";
import { Body, Caption } from "../typography";
import { Clickable } from "../buttons";
import { DropdownActionBar } from "./DropdownActionBar";
import { SearchInput } from "../inputs/SearchInput";
import { Checkbox } from "../inputs/Checkbox";
import { ClickableExpandIcon } from "../icons";
import classNames from "classnames";
import { useDebouncedCallback } from "use-debounce";
import { Loading } from "../loaders";

/**
 * A helper function to get all paginated and selected options.
 */
export const getAllOptions = (
  paginatedOptions: { id: string | number; label: string }[] | undefined,
  selectedOptions: { id: string | number; label: string }[] | undefined,
) => {
  if (paginatedOptions && selectedOptions) {
    const options = paginatedOptions;
    selectedOptions.forEach((option) => {
      if (!options.find((opt) => opt.id === option.id)) {
        options.push(option);
      }
    });
    return options;
  }
  return [];
};

export const hasSearchTerm = (
  data: ChecklistSelectableData,
  searchTerm: string,
): boolean => {
  if (!data.children) {
    return data.label.toLowerCase().includes(searchTerm.toLowerCase());
  }
  return (
    data.children.some((child) => hasSearchTerm(child, searchTerm)) ||
    data.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const isChecked = (
  data: ChecklistSelectableData,
  selectedValues: ChecklistSelectableData["id"][],
): boolean => {
  if (!data.children) {
    return selectedValues.includes(data.id);
  }
  return data.children.every((child) => isChecked(child, selectedValues));
};

export const getSelectedValues = (
  data: ChecklistSelectableData,
  selectedValues: ChecklistSelectableData["id"][],
): ChecklistSelectableData["id"][] => {
  if (!data.children) {
    if (!selectedValues.includes(data.id)) {
      return [...selectedValues, data.id];
    } else {
      return selectedValues.filter((id) => id !== data.id);
    }
  } else {
    if (isChecked(data, selectedValues)) {
      return selectedValues.filter((id) => {
        return data.children?.every((child) => {
          if (child.children) {
            return !child.children.map((child) => child.id).includes(id);
          }
          return child.id !== id;
        });
      });
    }
    const newValues = new Set([...selectedValues]);
    data.children.forEach((child) => {
      if (child.children) {
        child.children.forEach((item) => newValues.add(item.id));
      } else {
        newValues.add(child.id);
      }
    });
    return Array.from(newValues);
  }
};

const ChecklistDropdownItem = ({
  data,
  selectedValues,
  setSelectedValues,
  searchTerm,
}: {
  selectedValues: ChecklistSelectableData["id"][];
  data: ChecklistSelectableData;
  setSelectedValues: (value: ChecklistSelectableData["id"][]) => void;
  searchTerm: string;
}) => {
  const [open, setOpen] = useState(true);
  const checked = isChecked(data, selectedValues);

  return (
    <>
      <div className={styles.itemWrapper}>
        <label className={styles.item} key={data.id}>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={checked}
              onChange={() => {
                setSelectedValues(getSelectedValues(data, selectedValues));
              }}
            />
          </div>
          <Caption as="span" color="accent-ash-gray">
            {data.label}
          </Caption>
        </label>
        {data.children && (
          <ClickableExpandIcon
            label={`Expand ${data.label}`}
            onClick={() => setOpen(!open)}
            size="small"
            color="black"
            open={open}
          />
        )}
      </div>
      {data.children && open && (
        <div className={styles.children}>
          {data.children
            .filter((data) => hasSearchTerm(data, searchTerm))
            .map((child) => (
              <ChecklistDropdownItem
                key={child.id}
                data={child}
                searchTerm={searchTerm}
                selectedValues={selectedValues}
                setSelectedValues={setSelectedValues}
              />
            ))}
        </div>
      )}
    </>
  );
};

export type ChecklistSelectableData = {
  id: number | string;
  label: string;
  children?: ChecklistSelectableData[];
};

export const getAllSelectableValues = (
  selectableData: ChecklistSelectableData[],
) => {
  let selectableDataIds = [] as ChecklistSelectableData["id"][];
  selectableData.forEach((data) => {
    if (!data.children) {
      return selectableDataIds.push(data.id);
    }
    data.children.forEach((child) => {
      if (!child.children) {
        return selectableDataIds.push(child.id);
      }
      selectableDataIds = selectableDataIds.concat(
        child.children.map((item) => item.id),
      );
      return;
    });
  });
  return selectableDataIds;
};

export const ChecklistDropdown = ({
  label,
  placeholder,
  value,
  onApplyChanges,
  selectableData,
  width = 357,
  maxHeight = 384,
  onReset,
  canSelectAll = true,
  maxNumSelections,
  onSearch,
  isLoading,
  onLoadMore,
}: {
  label?: string;
  placeholder: string;
  value: ChecklistSelectableData["id"][];
  onApplyChanges: (value: ChecklistSelectableData["id"][]) => void;
  selectableData: ChecklistSelectableData[];
  width?: number;
  maxHeight?: number;
  onReset: () => void;
  canSelectAll?: boolean;
  maxNumSelections?: number;
  onSearch?: (searchTerm: string) => void;
  isLoading?: boolean;
  onLoadMore?: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedValues, setSelectedValues] =
    useState<ChecklistSelectableData["id"][]>(value);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  useClickOutside([containerRef], () => {
    setOpen(false);
  });

  const closeDropdownAndClearSearch = () => {
    setOpen(false);
    handleSearch("");
  };

  const handleReset = () => {
    onReset();
    closeDropdownAndClearSearch();
  };

  const handleApplyChanges = () => {
    onApplyChanges(selectedValues);
    closeDropdownAndClearSearch();
  };

  const handleSetSelectedValues = (value: ChecklistSelectableData["id"][]) => {
    if (!maxNumSelections || value.length <= maxNumSelections) {
      setSelectedValues(value);
    } else {
      setSelectedValues(value.slice(0, maxNumSelections));
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    debouncedOnSearch(searchTerm);
  };

  const debouncedOnSearch = useDebouncedCallback((searchTerm: string) => {
    onSearch?.(searchTerm);
  }, 300);

  const allSelectableValues = getAllSelectableValues(selectableData);
  const totalNumSelectableData = allSelectableValues.length;

  const { handleScroll, scrollingElement } = useHandleScrollInfiniteScroll({
    isLoading,
    onLoadMore,
  });

  return (
    <div ref={containerRef} className={styles.root}>
      <DropdownToggle
        isOpen={open}
        label={label || placeholder}
        hasValue={value.length > 0}
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div className={styles.dropdown} style={{ width, maxHeight }}>
          <div className={styles.search}>
            <SearchInput
              placeholder={`Search ${placeholder}`}
              value={searchTerm}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>
          <div
            ref={scrollingElement}
            className={styles.items}
            onScroll={onLoadMore ? handleScroll : undefined}
          >
            <div
              className={classNames(styles.selectAllAndClearSelection, {
                [styles.noSelectAll]: !canSelectAll,
              })}
            >
              {canSelectAll ? (
                <label className={styles.selectAll}>
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      disabled={isLoading}
                      checked={
                        selectedValues.length === totalNumSelectableData &&
                        !isLoading
                      }
                      onChange={() => {
                        if (selectedValues.length === totalNumSelectableData) {
                          setSelectedValues([]);
                        } else {
                          setSelectedValues(allSelectableValues);
                        }
                      }}
                    />
                  </div>
                  <Caption
                    weight="bold"
                    as="span"
                    color={isLoading ? "accent-squant" : "accent-ash-gray"}
                  >
                    Select All
                  </Caption>
                </label>
              ) : (
                <Caption
                  weight={
                    selectedValues.length === maxNumSelections
                      ? "bold"
                      : "normal"
                  }
                  as="span"
                  color="accent-ash-gray"
                >
                  Max {maxNumSelections} selections
                </Caption>
              )}
              <Clickable
                label="Clear Selection"
                onClick={() => {
                  setSelectedValues([]);
                }}
              >
                <Caption color="accent-uniform-grey">Clear Selection</Caption>
              </Clickable>
            </div>
            {selectableData
              .filter((data) => hasSearchTerm(data, searchTerm))
              .sort((data) => {
                if (data.children) return 0;
                return isChecked(data, selectedValues) ? -1 : 1;
              })
              .map((data) => (
                <ChecklistDropdownItem
                  key={data.id}
                  data={data}
                  searchTerm={searchTerm}
                  selectedValues={selectedValues}
                  setSelectedValues={handleSetSelectedValues}
                />
              ))}
            {isLoading && (
              <div className={styles.loading}>
                <Loading size="medium" />
              </div>
            )}
            {selectableData.length === 0 && !isLoading && (
              <Body color="accent-ash-gray">No options to show.</Body>
            )}
          </div>
          <DropdownActionBar
            onReset={handleReset}
            onApplyChanges={handleApplyChanges}
          />
        </div>
      )}
    </div>
  );
};
