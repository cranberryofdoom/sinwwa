import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./NavLinkGroupTrigger.module.css";
import classNames from "classnames";

type NavLinkGroupTrigger = {
  children: React.ReactNode;
  isMobile?: boolean;
};

export const NavLinkGroupTrigger = ({
  children,
  isMobile,
}: NavLinkGroupTrigger) => {
  return (
    <NavigationMenu.Trigger
      className={classNames(styles.navMenuTrigger, {
        [styles.mobile]: isMobile,
      })}
    >
      {children}
    </NavigationMenu.Trigger>
  );
};
