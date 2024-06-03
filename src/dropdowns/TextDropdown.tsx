import styles from "./TextDropdown.module.css";
import * as Select from "@radix-ui/react-select";
import { Icon, IconColors } from "../icons";
import { RadixDropdownList } from "./DropdownList";
import { RadixOptionsRow } from "./OptionsRow";
import { RadixDropdownSeparator } from "./DropdownSeparator";
import { colors } from "../tokens";

export const TextDropdown = {
  /**
   * Should render TextDropdown.Items and TextDropdown.Separators.
   */
  Root: ({
    children,
    placeholder,
    onValueChange,
    value,
    iconColor = "black",
    renderValue,
  }: {
    children: React.ReactNode;
    placeholder?: string;
    onValueChange: (value: string) => void;
    value?: string;
    iconColor?: IconColors;
    renderValue?: () => React.ReactNode;
  }) => {
    return (
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger className={styles.selectTrigger}>
          <Select.Value placeholder={placeholder}>
            {renderValue?.()}
          </Select.Value>
          <Select.Icon>
            <Icon color={iconColor} size="small" name="ExpandMore" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <RadixDropdownList position="popper">{children}</RadixDropdownList>
        </Select.Portal>
      </Select.Root>
    );
  },
  Item: RadixOptionsRow,
  Separator: RadixDropdownSeparator,
};
