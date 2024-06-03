import classNames from "classnames";
import styles from "./Divider.module.css";

export const Divider = ({
  variant = "horizontal",
}: {
  variant?: "horizontal" | "vertical";
}) => {
  return <div className={classNames(styles.root, styles[variant])} />;
};
