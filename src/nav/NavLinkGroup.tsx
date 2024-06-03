import styles from "./NavLinkGroup.module.css";
import { NavLinkRightIcon } from "./NavLinkRightIcon";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavLinkGroupList } from "./NavLinkGroupList";
import { NavLinkGroupTrigger } from "./NavLinkGroupTrigger";
import { Icon, IconName } from "../icons";
import { Body } from "../typography";
import { useContext } from "react";
import { NavBarContext } from "./NavBar";

type NavLinkGroupProps = {
  active: boolean;
  label?: string;
  iconName: IconName;
  children: React.ReactNode;
  width: number;
  position?: "left" | "right";
  onClick?: () => void;
};

export const NavLinkGroup = ({
  active,
  iconName,
  label,
  children,
  width,
  position,
  onClick,
}: NavLinkGroupProps) => {
  const { setOpenedMenuGroup, openedMenuGroup } = useContext(NavBarContext);

  const handleClick = () => {
    if (openedMenuGroup === iconName) {
      setOpenedMenuGroup("");
    } else {
      setOpenedMenuGroup(iconName);
    }
    onClick?.();
  };

  return (
    <NavigationMenu.Item
      value={iconName}
      onClick={handleClick}
      className={styles.navMenuItem}
    >
      <NavLinkGroupTrigger>
        <Icon
          color={active ? "cyan" : "black"}
          size={label ? "small" : "medium"}
          name={iconName}
        />
        {label && (
          <>
            <Body
              color={active ? "accent-darker-cyan" : "accent-offblack"}
              weight={active ? "bold" : "normal"}
            >
              {label}
            </Body>
            <NavLinkRightIcon name="ExpandMore" color="accent-offblack" />
          </>
        )}
      </NavLinkGroupTrigger>
      <NavLinkGroupList position={position} width={width}>
        {children}
      </NavLinkGroupList>
    </NavigationMenu.Item>
  );
};
