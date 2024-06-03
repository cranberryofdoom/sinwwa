import styles from "./MobileNavLinkMenu.module.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavLinkGroupTrigger } from "./NavLinkGroupTrigger";
import { Icon, ClickableIcon, IconName } from "../icons";
import { useContext } from "react";
import { NavBarContext } from "./NavBar";
import { H3 } from "../typography";

type MobileNavLinkMenuProps = {
  iconName: IconName;
  children: React.ReactNode;
  onClick?: () => void;
};

export const MobileNavLinkMenu = ({
  iconName,
  children,
  onClick,
}: MobileNavLinkMenuProps) => {
  const { setOpenedMenuGroup, openedMenuGroup } = useContext(NavBarContext);

  const handleClick = () => {
    if (openedMenuGroup !== "") {
      setOpenedMenuGroup("");
    } else {
      setOpenedMenuGroup(iconName);
    }
    onClick?.();
  };

  const handleClose = () => {
    setOpenedMenuGroup("");
  };

  return (
    <NavigationMenu.Item
      onClick={handleClick}
      value={iconName}
      className={styles.navMenuItem}
    >
      <NavLinkGroupTrigger>
        <Icon color="black" size="medium" name={iconName} />
      </NavLinkGroupTrigger>
      <NavigationMenu.Content className={styles.navMenuContent}>
        <div
          onClick={handleClose}
          className={styles.mobileNavLinkMenuBackdrop}
        />
        <NavigationMenu.List className={styles.navMenuList}>
          <div className={styles.mobileNavLinkMenuHeader}>
            <H3 color="base-yellow" textTransform="uppercase">
              Navigation
            </H3>
            <ClickableIcon
              label="Close"
              onClick={handleClose}
              color="black"
              size="medium"
              name="Close"
            />
          </div>
          <div className={styles.mobileNavLinkMenuContent}>{children}</div>
        </NavigationMenu.List>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};
