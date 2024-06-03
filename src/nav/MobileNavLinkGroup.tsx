import { NavLinkRightIcon } from "./NavLinkRightIcon";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavLinkGroupTrigger } from "./NavLinkGroupTrigger";
import { Icon, IconName } from "../icons";
import { Body } from "../typography";
import { useState } from "react";
import styles from "./MobileNavLinkGroup.module.css";

type MobileNavLinkGroupProps = {
  active: boolean;
  label: string;
  iconName: IconName;
  children: React.ReactNode;
  onClick?: () => void;
};

export const MobileNavLinkGroup = ({
  active,
  iconName,
  label,
  children,
  onClick,
}: MobileNavLinkGroupProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    onClick?.();
  };

  return (
    <NavigationMenu.Sub value={isSubMenuOpen ? iconName : ""}>
      <NavigationMenu.Item
        className={styles.navMenuItem}
        value={isSubMenuOpen ? iconName : ""}
        onClick={handleClick}
      >
        <NavLinkGroupTrigger isMobile>
          <Icon
            color={active ? "cyan" : "black"}
            size={label ? "small" : "medium"}
            name={iconName}
          />
          <Body
            color={active ? "accent-darker-cyan" : "accent-offblack"}
            weight={active ? "bold" : "normal"}
          >
            {label}
          </Body>
          <NavLinkRightIcon name="ExpandMore" color="accent-offblack" />
        </NavLinkGroupTrigger>
        <NavigationMenu.Content>
          <NavigationMenu.List>{children}</NavigationMenu.List>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.Sub>
  );
};
