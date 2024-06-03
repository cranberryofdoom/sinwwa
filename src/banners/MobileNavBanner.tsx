import classNames from "classnames";
import styles from "./MobileNavBanner.module.css";
import { NavBannerProps } from "./NavBanner";

export const MobileNavBanner = ({
  variant = "neutral",
  children,
  onClick,
}: {
  onClick?: () => void;
} & NavBannerProps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={classNames(styles.root, styles[variant])}
    >
      {children}
    </div>
  );
};
