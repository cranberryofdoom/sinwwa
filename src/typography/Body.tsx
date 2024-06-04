import styles from "./Body.module.css";
import { colors } from "../styles";
import classNames from "classnames";

type BodyProps = {
  as?: "p" | "span";
  children: React.ReactNode | string;
  color?: keyof typeof colors;
  weight?: "normal" | "bold";
  className?: string;
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
  textAlign?: React.CSSProperties["textAlign"];
  textTransform?: React.CSSProperties["textTransform"];
};

export const Body = ({
  as = "p",
  children,
  color = "base-black",
  weight = "normal",
  className,
  dataCy,
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
      data-cy={dataCy}
    >
      {children}
    </HTMLElement>
  );
};
