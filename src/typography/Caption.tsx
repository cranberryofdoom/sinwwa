import styles from "./Caption.module.css";
import { colors } from "../tokens";
import classNames from "classnames";

type CaptionProps = {
  as?: "p" | "span";
  children: React.ReactNode | string;
  color: keyof typeof colors;
  weight?: "normal" | "bold";
  className?: string;
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
  textAlign?: React.CSSProperties["textAlign"];
  width?: React.CSSProperties["width"];
  textWrap?: React.CSSProperties["textWrap"];
  textTransform?: React.CSSProperties["textTransform"];
};

export const Caption = ({
  as = "p",
  children,
  color,
  weight = "normal",
  className,
  dataCy,
  textAlign = "left",
  width,
  textWrap,
  textTransform = "initial",
}: CaptionProps) => {
  const HTMLElement = as === "p" ? "p" : "span";
  return (
    <HTMLElement
      data-cy={dataCy}
      style={{
        color: colors[color],
        textAlign,
        width,
        textWrap,
        textTransform,
      }}
      className={classNames(
        styles.caption,
        styles[weight],
        { [styles.fixedWidth]: width },
        className,
      )}
    >
      {children}
    </HTMLElement>
  );
};
