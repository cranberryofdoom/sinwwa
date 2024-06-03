import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./NavLinkGroupList.module.css";
import classNames from "classnames";

type NavLinkGroupListProps = {
  width: number;
  position?: "left" | "right";
  children: React.ReactNode;
};
export const NavLinkGroupList = ({
  width,
  children,
  position = "left",
}: NavLinkGroupListProps) => {
  return (
    <NavigationMenu.Content
      style={{
        width: `${width}px`,
      }}
      className={classNames(styles.navMenuContent, styles[position])}
    >
      <NavigationMenu.List>{children}</NavigationMenu.List>
    </NavigationMenu.Content>
  );
};
