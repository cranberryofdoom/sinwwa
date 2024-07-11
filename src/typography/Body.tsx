import styles from "./Body.module.css";
import { colors } from "../styles";
import classNames from "classnames";
import { BaseTypographyProps } from "./types";

type BodyProps = BaseTypographyProps & {
  as?: "p" | "span";
  weight?: "normal" | "bold";
};

export const Body = ({
  as = "p",
  children,
  color = "base-black",
  weight = "normal",
  className,
  textAlign = "left",
  textTransform = "initial",
}: BodyProps) => {
  const HTMLElement = as === "p" ? "p" : "span";
  return (
    <HTMLElement
      style={{
        color: colors[color],
        textAlign,
        textTransform,
      }}
      className={classNames(styles.body, styles[weight], className)}
    >
      {children}
    </HTMLElement>
  );
};
