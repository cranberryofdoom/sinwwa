import styles from "./Icon.module.css";
import classNames from "classnames";
import * as Icons from "./assets";
import { colors } from "../tokens";
import { IconName } from "./Icon";

type TextIconProps = {
  className?: string;
  color: keyof typeof colors;
  /**
   * Name of the icon to be displayed, which should be one of the keys in the Icons object.
   */
  name: IconName;
  /**
   * Size of the icon to be displayed.
   * small: 24px
   * medium: 32px
   * large: 48px
   */
  size: "small" | "medium" | "large";
  /**
   * Whether the icon should be hidden from screen readers.
   */
  ariaHidden?: boolean;
};

/**
 * An icon to be paired with text. Use this when the colors on the Icon component are not enough.
 * This component is not limited to the colors that the Icon component is limited to, and can be any color from the color palette.
 * However, unlike the Icon component, this component cannot be in a circle.
 */
export const TextIcon = ({ className, color, name, size }: TextIconProps) => {
  const IconComponent = Icons[name];

  if (IconComponent === undefined) {
    throw new Error(`Icon with name: ${name} not found.`);
  }

  return (
    <div className={classNames(className, styles.icon, styles[size])}>
      <IconComponent role="img" fill={colors[color]} />
    </div>
  );
};
