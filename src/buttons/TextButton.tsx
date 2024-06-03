import classNames from "classnames";
import { IconColors, IconName, TextIcon } from "../icons";
import { colors } from "../tokens";
import styles from "./TextButton.module.css";
import { Loading } from "../loaders";

type TextButtonProps = {
  iconName: IconName;
  textColor?: IconColors;
  iconColor?: keyof typeof colors;
  children: string;
  className?: string;
  textTransform?: React.CSSProperties["textTransform"];
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getColor = (color: TextButtonProps["color"]) => {
  switch (color) {
    case "gray":
      return colors["accent-uniform-grey"];
    case "white":
      return colors["base-white"];
    case "cyan":
      return colors["accent-darker-cyan"];
    case "blue":
      return colors["system-link-blue"];
    default:
      return colors["accent-ash-gray"];
  }
};

export const TextButton = ({
  iconName,
  textColor,
  iconColor,
  children,
  className,
  textTransform,
  isLoading,
  disabled,
  ...args
}: TextButtonProps) => {
  return (
    <button
      className={classNames(styles.root, className)}
      type="button"
      disabled={isLoading || disabled}
      {...args}
      style={{
        textTransform,
      }}
    >
      {isLoading ? (
        <Loading size="small" color="gray" />
      ) : (
        <TextIcon
          color={iconColor || "accent-darker-cyan"}
          name={iconName}
          size="small"
        />
      )}
      <span style={{ color: getColor(textColor) }}>{children}</span>
    </button>
  );
};
