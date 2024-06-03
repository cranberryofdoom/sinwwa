import styles from "./NavLinkGroupOption.module.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { Caption } from "../typography";
import { Icon, IconName } from "../icons";
import { NavLinkRightIcon } from "./NavLinkRightIcon";

type NavLinkGroupOptionProps = {
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
}: NavLinkGroupOptionProps) => {
  return (
    <>
      <Icon color={active ? "cyan" : "black"} size="medium" name={iconName} />
      <Caption color={active ? "accent-darker-cyan" : "accent-offblack"}>
        {label}
      </Caption>
      {isPremium && (
        <NavLinkRightIcon name="Crown" color="system-caution-yellow" />
      )}
    </>
  );
};

export const NavLinkGroupOption = ({
  active,
  iconName,
  isPremium,
  label,
  href,
  onClick,
}: NavLinkGroupOptionProps) => {
  const matchesHref = location.pathname === href;
  const isActive = active || matchesHref;

  if (href) {
    return (
      <NavigationMenu.Item className={styles.navMenuItem}>
        <a href={href}>
          <NavigationMenu.Link
            className={classNames(styles.navLink)}
            active={isActive}
            onClick={onClick}
          >
            <NavLinkGroupOptionContent
              label={label}
              active={isActive}
              iconName={iconName}
              isPremium={isPremium}
              onClick={onClick}
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
        onClick={onClick}
      >
        <NavLinkGroupOptionContent
          label={label}
          active={isActive}
          iconName={iconName}
          isPremium={isPremium}
          onClick={onClick}
        />
      </NavigationMenu.Trigger>
    </NavigationMenu.Item>
  );
};
