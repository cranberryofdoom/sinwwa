import classNames from "classnames";
import styles from "./NavBanner.module.css";

export type NavBannerProps = {
  variant?: "neutral" | "warning";
  children: React.ReactNode;
};

export const NavBanner = ({
  variant = "neutral",
  children,
}: NavBannerProps) => {
  return (
    <div className={classNames(styles.root, styles[variant])}>{children}</div>
  );
};
