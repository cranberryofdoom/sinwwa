import styles from "./DropdownToggle.module.css";
import { ExpandIcon } from "../icons";
import { Caption } from "../typography";

export const DropdownToggle = ({
  onClick,
  hasValue,
  label,
  isOpen,
}: {
  onClick: () => void;
  hasValue: boolean;
  label: string;
  isOpen: boolean;
}) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <Caption
        weight={(hasValue && "bold") || undefined}
        color={hasValue ? "accent-ash-gray" : "accent-uniform-grey"}
      >
        {label}
      </Caption>
      <ExpandIcon open={isOpen} color="black" size="small" />
    </div>
  );
};
