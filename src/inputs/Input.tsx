import { forwardRef } from "react";
import styles from "./Input.module.css";
import { ClickableIcon, Icon, IconColors, IconName } from "../icons";
import classNames from "classnames";

export type InputProps = {
  leftIconName?: IconName;
  rightIconName?: IconName;
  leftIconColor?: IconColors;
  /**
   * The icon to the right of an input can be clicked on.
   */
  onClickRightIcon?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputRightIcon = ({
  rightIconName,
  onClickRightIcon,
}: Pick<InputProps, "rightIconName" | "onClickRightIcon">) => {
  if (rightIconName) {
    if (onClickRightIcon) {
      return (
        <ClickableIcon
          label={rightIconName}
          color="black"
          size="small"
          className={styles.rightIcon}
          name={rightIconName}
          onClick={onClickRightIcon}
        />
      );
    }
    return (
      <Icon
        className={styles.rightIcon}
        color="black"
        size="small"
        name={rightIconName}
      />
    );
  }
  return null;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIconName,
      leftIconColor = "black",
      rightIconName,
      onClickRightIcon,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <div className={styles.root}>
        {leftIconName && (
          <Icon
            className={styles.leftIcon}
            color={leftIconColor}
            size="small"
            name={leftIconName}
          />
        )}
        <input
          {...props}
          ref={forwardedRef}
          className={classNames(styles.input, {
            [styles.withLeftIcon]: !!leftIconName,
            [styles.withRightIcon]: !!rightIconName,
          })}
        />
        <InputRightIcon
          rightIconName={rightIconName}
          onClickRightIcon={onClickRightIcon}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
