import { Caption } from "../typography";
import styles from "./Switch.module.css";
import * as RadixSwitch from "@radix-ui/react-switch";

type SwitchProps = {
  label: string;
  onCheckedChange?: (value: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
};

export const Switch = ({
  label,
  onCheckedChange,
  checked,
  disabled,
}: SwitchProps) => {
  return (
    <div className={styles.root}>
      <RadixSwitch.Root
        onCheckedChange={onCheckedChange}
        checked={checked}
        disabled={disabled}
        className={styles.switchRoot}
        id="switch"
      >
        <RadixSwitch.Thumb className={styles.switchThumb} />
      </RadixSwitch.Root>
      <label htmlFor="switch">
        <Caption
          weight={checked ? "bold" : "normal"}
          color={checked ? "accent-ash-gray" : "accent-uniform-grey"}
        >
          {label}
        </Caption>
      </label>
    </div>
  );
};
