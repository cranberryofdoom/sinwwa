import styles from "./ExpandIcon.module.css";
import classNames from "classnames";
import { Icon, IconProps } from "./Icon";
import { ClickableIcon } from "./ClickableIcon";

export const ExpandIcon = ({
  className,
  open,
  size,
  color,
}: {
  className?: string;
  open: boolean;
  size: IconProps["size"];
  color: IconProps["color"];
}) => {
  return (
    <Icon
      className={classNames(className, {
        [styles.open]: open,
      })}
      color={color}
      size={size}
      name="ExpandMore"
    />
  );
};

export const ClickableExpandIcon = ({
  disabled,
  className,
  onClick,
  open,
  size,
  color,
  label,
}: {
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  open: boolean;
  size: IconProps["size"];
  color: IconProps["color"];
  label: string;
}) => {
  return (
    <ClickableIcon
      className={classNames(className, {
        [styles.open]: open,
      })}
      disabled={disabled}
      color={color}
      size={size}
      name="ExpandMore"
      label={label}
      onClick={onClick}
    />
  );
};
