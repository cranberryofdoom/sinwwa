import { useContext } from "react";
import styles from "./MobileNavLinkGroupOption.module.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { Body } from "../typography";
import { Icon, IconName } from "../icons";
import { NavLinkRightIcon } from "./NavLinkRightIcon";
import { NavBarContext } from "./NavBar";

type MobileNavLinkGroupOptionProps = {
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  onClick?: () => void;
  label: string;
  iconName: IconName;
  /**
   * Indicates whether this nav link is a premium feature.
   * We can rethink this prop if we need to support right icons on NavLinkGroupOption that
   * aren't just to indicate whether something is a premium feature.
   */
  isPremium?: boolean;
  /**
   * An override to allow nav links to be active when matching detail pages.
   */
  active?: boolean;
};

const NavLinkGroupOptionContent = ({
  active,
  iconName,
  isPremium,
  label,
}: MobileNavLinkGroupOptionProps) => {
  return (
    <>
      <Icon color={active ? "cyan" : "black"} size="small" name={iconName} />
      <Body color={active ? "accent-darker-cyan" : "accent-offblack"}>
        {label}
      </Body>
      {isPremium && (
        <NavLinkRightIcon name="Crown" color="system-caution-yellow" />
      )}
    </>
  );
};

export const MobileNavLinkGroupOption = ({
  active,
  iconName,
  isPremium,
  label,
  href,
  onClick,
}: MobileNavLinkGroupOptionProps) => {
  const { setOpenedMenuGroup, openedMenuGroup } = useContext(NavBarContext);
  const matchesHref = location.pathname === href;
  const isActive = active || matchesHref;

  const handleClick = () => {
    if (openedMenuGroup) {
      setOpenedMenuGroup("");
    }
    onClick?.();
  };

  if (href) {
    return (
      <NavigationMenu.Item className={styles.navMenuItem}>
        <a href={href}>
          <NavigationMenu.Link
            className={classNames(styles.navLink)}
            active={isActive}
            onClick={handleClick}
          >
            <NavLinkGroupOptionContent
              label={label}
              active={isActive}
              iconName={iconName}
              isPremium={isPremium}
            />
          </NavigationMenu.Link>
        </a>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item className={styles.navMenuItem}>
      <NavigationMenu.Trigger
        className={classNames(styles.navLink)}
        onClick={handleClick}
      >
        <NavLinkGroupOptionContent
          label={label}
          active={isActive}
          iconName={iconName}
          isPremium={isPremium}
        />
      </NavigationMenu.Trigger>
    </NavigationMenu.Item>
  );
};
