import { TextIcon } from "../icons";
import { Caption } from "../typography";
import styles from "./FieldErrorMessage.module.css";

export const FieldErrorMessage = ({
  children,
  ...args
}: {
  children: string;
}) => {
  return (
    <div className={styles.root} {...args}>
      <TextIcon
        ariaHidden
        name="Close"
        size="small"
        color="system-warning-red"
      />
      <Caption color="system-warning-red">{children}</Caption>
    </div>
  );
};
