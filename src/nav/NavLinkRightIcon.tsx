import { IconName, TextIcon } from "../icons";
import { colors } from "../tokens";
import styles from "./NavLinkRightIcon.module.css";

type NavLinkRightIconProps = {
  color: keyof typeof colors;
  name: IconName;
};

/**
 * The Icon to the right of a nav link.
 * The color of this icon does not change when the nav link is active and can be any color from the color palette.
 */
export const NavLinkRightIcon = ({ color, name }: NavLinkRightIconProps) => {
  return (
    <TextIcon
      className={styles.navLinkRightIcon}
      color={color}
      size="small"
      name={name}
    />
  );
};
