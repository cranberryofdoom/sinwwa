import classNames from "classnames";
import { Icon, IconName } from "../icons";
import styles from "./Button.module.css";
import { Loading } from "../loaders/Loading";

export type ButtonProps = {
  size: "small" | "medium" | "large";
  /**
   * For now, secondary and primary are the same.
   */
  variant?: "primary" | "secondary" | "tertiary";
  rightIconName?: IconName;
  leftIconName?: IconName;
  children: string | string[];
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  leftIconName,
  rightIconName,
  size = "small",
  variant = "primary",
  disabled,
  isLoading,
  ...args
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={classNames(styles.root, styles[variant], styles[size], {
        [styles.disabled]: disabled,
      })}
      {...args}
    >
      {leftIconName && (
        <Icon
          size={size === "large" ? "medium" : "small"}
          name={leftIconName}
          color={variant === "tertiary" ? "black" : "white"}
        />
      )}
      {isLoading ? (
        <Loading
          color={variant !== "secondary" ? "gray" : "white"}
          size={size === "large" ? "medium" : "small"}
        />
      ) : (
        <span className={styles.text}>{children}</span>
      )}
      {rightIconName && (
        <Icon
          size={size === "large" ? "medium" : "small"}
          name={rightIconName}
          color={variant === "tertiary" ? "black" : "white"}
        />
      )}
    </button>
  );
};
