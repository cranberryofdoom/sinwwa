import styles from "./MobileBanner.module.css";
import { Icon, IconColors, IconName } from "../icons";
import { Caption, H3 } from "../typography";
import { Button } from "../buttons";
import { colors } from "../styles";

const getHeaderColor = (color: IconColors): keyof typeof colors => {
  switch (color) {
    case "black":
      return "accent-ash-gray";
    case "gray":
      return "accent-uniform-grey";
    case "white":
      return "base-white";
    case "cyan":
      return "base-cyan";
    case "blue":
      return "system-link-blue";
  }
};

/**
 * A blocking banner that is displayed on mobile devices.
 * Often times used to let the user know that the page is more usable on desktop.
 */
export const MobileBanner = {
  /**
   * Should render a MobileBanner.Body and MobileBanner.Footer.
   */
  Root: ({ children }: { children: React.ReactNode }) => {
    return (
      <div className={styles.root}>
        <div className={styles.backdrop}></div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  },
  /**
   * Should render a MobileBanner.Header and MobileBanner.Description.
   */
  Body: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.body}>{children}</div>;
  },
  Header: ({
    iconName,
    color,
    children,
  }: {
    iconName: IconName;
    color: IconColors;
    children: React.ReactNode;
  }) => {
    return (
      <div className={styles.header}>
        <Icon name={iconName} size="small" color={color} />
        <H3 color={getHeaderColor(color)}>{children}</H3>
      </div>
    );
  },
  Description: ({ children }: { children: React.ReactNode }) => {
    return <Caption color="accent-ash-gray">{children}</Caption>;
  },
  /**
   * Should render MobileBanner.PrimaryCTA and MobileBanner.SecondaryCTA.
   */
  Footer: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.footer}>{children}</div>;
  },
  PrimaryCTA: ({
    children,
    onClick,
  }: {
    children: string;
    onClick: () => void;
  }) => {
    return (
      <Button onClick={onClick} size="large">
        {children}
      </Button>
    );
  },
  SecondaryCTA: ({
    children,
    onClick,
  }: {
    children: string;
    onClick: () => void;
  }) => {
    return (
      <div className={styles.secondaryCTA} role="button" onClick={onClick}>
        <Caption textAlign="center" color="system-link-blue">
          {children}
        </Caption>
      </div>
    );
  },
};
