import styles from "./NavLink.module.css";
import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon, IconName } from "../icons";
import { Body } from "../typography";
import { useContext } from "react";
import { NavBarContext } from "./NavBar";

type NavLinkProps = {
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  label: string;
  iconName: IconName;
  /**
   * An override to allow nav links to be active when matching detail pages.
   */
  active?: boolean;
};

export const NavLink = ({ iconName, label, href, active }: NavLinkProps) => {
  const { setOpenedMenuGroup, openedMenuGroup } = useContext(NavBarContext);
  const matchesHref = location.pathname === href;
  const isActive = active || matchesHref;

  const handleClick = () => {
    if (openedMenuGroup) {
      setOpenedMenuGroup("");
    }
  };

  return (
    <NavigationMenu.Item onClick={handleClick} className={styles.navMenuItem}>
      <a href={href}>
        <NavigationMenu.Link
          className={classNames(styles.navLink)}
          active={isActive}
        >
          <Icon
            color={isActive ? "cyan" : "black"}
            size="small"
            name={iconName}
          />
          <Body
            color={isActive ? "accent-darker-cyan" : "accent-offblack"}
            weight={isActive ? "bold" : "normal"}
          >
            {label}
          </Body>
        </NavigationMenu.Link>
      </a>
    </NavigationMenu.Item>
  );
};
