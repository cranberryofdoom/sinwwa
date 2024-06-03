import classNames from "classnames";
import { colors } from "../tokens";
import styles from "./Tag.module.css";

export const Tag = ({
  color,
  children,
  textColor = "light",
}: {
  color: keyof typeof colors;
  children: string;
  textColor?: "light" | "dark";
}) => {
  return (
    <div
      style={{
        backgroundColor: colors[color],
      }}
      className={classNames(styles.root, styles[textColor])}
    >
      {children}
    </div>
  );
};
