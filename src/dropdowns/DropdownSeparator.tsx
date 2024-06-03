import * as Select from "@radix-ui/react-select";
import styles from "./DropdownSeparator.module.css";

/**
 * A dropdown options row compatible with Radix UI.
 */
export const RadixDropdownSeparator = () => {
  return <Select.Separator className={styles.selectSeparator} />;
};

export const DropdownSeparator = () => {
  return <div className={styles.root} />;
};
