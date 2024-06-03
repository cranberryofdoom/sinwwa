import styles from "./ClickableIcon.module.css";
import classNames from "classnames";
import { Icon, IconProps } from "./Icon";

export type ClickableIconProps = IconProps & {
  onClick: () => void;
  /**
   * The label for the icon. This is used for accessibility purposes.
   */
  label: string;
  disabled?: boolean;
};

/**
 * An icon that is meant to be clicked on.
 * This component is built slightly differently from Icon to fully support accessability.
 */
export const ClickableIcon = ({
  color,
  circle,
  dataCy,
  onClick,
  name,
  size,
  label,
  className,
  disabled,
}: ClickableIconProps) => {
  return (
    <button
      className={classNames(className, { [styles.disabled]: disabled })}
      type="button"
      aria-labelledby="pressable-icon-label"
      onClick={onClick}
      disabled={disabled}
    >
      <span id="pressable-icon-label" hidden>
        {label}
      </span>
      <Icon
        color={color}
        circle={circle}
        dataCy={dataCy}
        name={name}
        size={size}
      />
    </button>
  );
};
