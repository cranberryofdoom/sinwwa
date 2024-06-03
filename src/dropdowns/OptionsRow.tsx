import styles from "./OptionsRow.module.css";
import * as Select from "@radix-ui/react-select";
import { forwardRef } from "react";
import { Caption } from "../typography";
import { Loading } from "../loaders/Loading";
import classNames from "classnames";

/**
 * A dropdown options row compatible with Radix UI.
 */
export const RadixOptionsRow = forwardRef<
  HTMLDivElement,
  Select.SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={styles.selectItem} {...props} ref={forwardedRef}>
      <Select.ItemText>
        <Caption color="accent-ash-gray">{children}</Caption>
      </Select.ItemText>
    </Select.Item>
  );
});

RadixOptionsRow.displayName = "OptionsRow";

export const OptionsRow = ({
  id,
  onClick,
  name,
}: {
  id: string;
  name: string;
  onClick: () => void;
}) => {
  return (
    <div
      tabIndex={0}
      className={styles.dropdownItem}
      key={id}
      onClick={onClick}
    >
      <Caption color="accent-ash-gray">{name}</Caption>
    </div>
  );
};

export const EmptyOptionsRowPlaceholder = () => {
  return (
    <div className={styles.dropdownItem}>
      <Caption color="accent-ash-gray">No results found</Caption>
    </div>
  );
};

export const LoadingOptionsRowPlaceholder = () => {
  return (
    <div className={classNames(styles.dropdownItem, styles.loading)}>
      <Loading size="medium" color="gray" />
    </div>
  );
};
