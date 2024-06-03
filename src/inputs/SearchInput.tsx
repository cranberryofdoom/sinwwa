import styles from "./SearchInput.module.css";
import { forwardRef } from "react";
import { Input } from "./Input";
import { ClickableIcon } from "../icons";

export const SearchInput = forwardRef<
  HTMLInputElement,
  { onClear?: () => void } & Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onFocus" | "required" | "value" | "placeholder" | "onChange" | "disabled"
  >
>(
  (
    { onClear, onFocus, required, value, placeholder, onChange, ...args },
    ref,
  ) => {
    return (
      <div className={styles.root}>
        <Input
          leftIconColor="cyan"
          leftIconName="Search"
          onFocus={onFocus}
          required={required}
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...args}
        />
        {value && onClear && (
          <ClickableIcon
            className={styles.clearIcon}
            label="Clear"
            onClick={onClear}
            color="black"
            size="small"
            name="Close"
          />
        )}
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";
