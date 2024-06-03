import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from "./NavBar.module.css";
import { createContext, useEffect, useMemo, useState } from "react";
import classNames from "classnames";

type NavBarContextValue = {
  openedMenuGroup: string;
  setOpenedMenuGroup: (value: string) => void;
};

export const NavBarContext = createContext<NavBarContextValue>({
  openedMenuGroup: "",
  setOpenedMenuGroup: () => {},
});

export const NavBar = {
  DesktopRoot: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const [openedMenuGroup, setOpenedMenuGroup] = useState<string>("");
    const contextValue = useMemo(
      () => ({ openedMenuGroup, setOpenedMenuGroup }),
      [openedMenuGroup],
    );

    return (
      <NavigationMenu.Root
        value={openedMenuGroup}
        className={styles.navMenuRoot}
      >
        <NavBarContext.Provider value={contextValue}>
          <NavigationMenu.List
            className={classNames(styles.navMenuList, className)}
          >
            {children}
          </NavigationMenu.List>
        </NavBarContext.Provider>
      </NavigationMenu.Root>
    );
  },
  MobileRoot: ({
    children,
    value,
    onValueChange,
  }: {
    children: React.ReactNode;
    /**
     * The value of the opened menu group. The name of this value should match the
     * name of the icon that opens the menu. We're currently only using this to support
     * allowing the first tour guide hotspot to open the menu.
     */
    value?: string;
    onValueChange?: (value: string) => void;
  }) => {
    const [openedMenuGroup, setOpenedMenuGroup] = useState<string>(value ?? "");
    const contextValue = useMemo(
      () => ({ openedMenuGroup, setOpenedMenuGroup }),
      [openedMenuGroup],
    );

    useEffect(() => {
      setOpenedMenuGroup(value ?? "");
    }, [value]);

    // Sync the value with the parent component. This is kinda gross, I know.
    useEffect(() => {
      if (openedMenuGroup !== value) {
        onValueChange?.(openedMenuGroup);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openedMenuGroup]);

    return (
      <NavigationMenu.Root
        value={openedMenuGroup}
        className={classNames(styles.navMenuRoot, styles.mobile)}
      >
        <NavBarContext.Provider value={contextValue}>
          <NavigationMenu.List className={styles.navMenuList}>
            {children}
          </NavigationMenu.List>
          <NavigationMenu.Viewport className={styles.navMenuViewport} />
        </NavBarContext.Provider>
      </NavigationMenu.Root>
    );
  },
  LeftContent: ({ children }: { children?: React.ReactNode }) => {
    return <div className={styles.navBarLeftContent}>{children}</div>;
  },
  RightContent: ({ children }: { children?: React.ReactNode }) => {
    return <div className={styles.navBarRightContent}>{children}</div>;
  },
};
