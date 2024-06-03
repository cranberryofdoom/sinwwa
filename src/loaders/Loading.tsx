import classNames from "classnames";
import styles from "./Loading.module.css";

export const Loading = ({
  size = "x-large",
  color = "yellow",
}: {
  size?: "small" | "medium" | "large" | "x-large";
  color?: "yellow" | "white" | "gray" | "cyan";
}) => {
  return (
    <div className={classNames(styles.root, styles[size], styles[color])} />
  );
};
