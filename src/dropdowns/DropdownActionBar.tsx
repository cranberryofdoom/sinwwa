import styles from "./DropdownActionBar.module.css";
import { Button } from "../buttons";

export const DropdownActionBar = ({
  onReset,
  onApplyChanges,
}: {
  onReset: () => void;
  onApplyChanges: () => void;
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onReset} size="small" variant="tertiary">
        Reset
      </Button>
      <Button onClick={onApplyChanges} size="small">
        Apply
      </Button>
    </div>
  );
};
