import { forwardRef } from "react";
import { ClickableExpandIcon, ClickableIcon, ExpandIcon, Icon } from "../icons";
import styles from "./SearchableDropdownInput.module.css";
import { SearchInput } from "./SearchInput";

type SearchableDropdownInputProps = {
  onClear: () => void;
  isOptionsShown: boolean;
  onToggleOpen: () => void;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onFocus" | "required" | "value" | "placeholder" | "onChange" | "disabled"
>;

export const SearchableDropdownInput = forwardRef<
  HTMLInputElement,
  SearchableDropdownInputProps
>(
  (
    {
      onFocus,
      required,
      value,
      placeholder,
      onChange,
      onClear,
      isOptionsShown,
      onToggleOpen,
      disabled,
      ...args
    },
    ref,
  ) => {
    return (
      <div className={styles.root}>
        <SearchInput
          onFocus={onFocus}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          disabled={disabled}
          {...args}
        />
        {value && (
          <ClickableIcon
            disabled={disabled}
            className={styles.clearIcon}
            label="Clear"
            onClick={onClear}
            color="black"
            size="small"
            name="Close"
          />
        )}
        <ClickableExpandIcon
          disabled={disabled}
          label="Toggle Searchable Dropdown"
          onClick={onToggleOpen}
          className={styles.expandIcon}
          open={isOptionsShown}
          size="small"
          color="black"
        />
      </div>
    );
  },
);

SearchableDropdownInput.displayName = "SearchableDropdownInput";
