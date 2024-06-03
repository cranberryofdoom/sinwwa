import classNames from "classnames";
import * as Icons from "./assets";
import styles from "./Icon.module.css";

export type IconName = keyof typeof Icons;
export type IconColors = "black" | "gray" | "white" | "cyan" | "blue";

export type IconProps = {
  circle?: boolean;
  color: IconColors;
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
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
  className?: string;
};

/**
 * The Icon component is used to display an icon from the icons library.
 * This component can be in a circle, and is limited to certain colors in the color palette.
 */
export const Icon = ({
  ariaHidden,
  color,
  circle,
  dataCy,
  name,
  size,
  className,
}: IconProps) => {
  const IconComponent = Icons[name];

  if (IconComponent === undefined) {
    throw new Error(`Icon with name: ${name} not found.`);
  }

  return (
    <div
      className={classNames(
        styles.icon,
        styles[size],
        styles[color],
        {
          [styles.circle]: circle,
        },
        className,
      )}
    >
      <IconComponent aria-hidden={ariaHidden} role="img" data-cy={dataCy} />
    </div>
  );
};
