import styles from "./Dropdown.module.css";
import * as Select from "@radix-ui/react-select";
import { ClickableIcon, Icon } from "../icons";
import { useState } from "react";
import { RadixOptionsRow } from "../dropdowns/OptionsRow";
import { RadixDropdownList } from "../dropdowns/DropdownList";
import { RadixDropdownSeparator } from "../dropdowns/DropdownSeparator";
import { Loading } from "../loaders";
import classNames from "classnames";

export const Dropdown = {
  /**
   * Should render Dropdown.Items and Dropdown.Separators.
   */
  Root: ({
    children,
    placeholder,
    value,
    onValueChange,
    onClear,
    isLoading,
  }: {
    children: React.ReactNode;
    placeholder: string;
    value?: string;
    onValueChange: (value: string) => void;
    /**
     * Clears the value for controlled Dropdowns.
     */
    onClear?: () => void;
    isLoading?: boolean;
  }) => {
    // Accommodates for dropdown in modals and cursed z-indexing.
    const [portalContainer, setPortalContainer] =
      useState<HTMLDivElement | null>(null);

    return (
      <div className={styles.root}>
        <Select.Root
          disabled={isLoading}
          value={value}
          onValueChange={onValueChange}
        >
          <Select.Trigger
            className={classNames(styles.selectTrigger, {
              [styles.hasValue]: value,
            })}
          >
            {isLoading && <Loading size="small" color="gray" />}
            <Select.Value placeholder={placeholder} />
            <Select.Icon>
              <Icon color="black" size="small" name="ExpandMore" />
            </Select.Icon>
          </Select.Trigger>
          {onClear && value && (
            <ClickableIcon
              className={styles.clear}
              color="black"
              size="small"
              label="Clear Value"
              name="Close"
              onClick={() => onClear?.()}
            />
          )}
          <Select.Portal container={portalContainer}>
            <RadixDropdownList>{children}</RadixDropdownList>
          </Select.Portal>
          <div className={styles.portalContainer} ref={setPortalContainer} />
        </Select.Root>
      </div>
    );
  },
  Item: RadixOptionsRow,
  Separator: RadixDropdownSeparator,
};
