import styles from "./Caption.module.css";
import { colors } from "../styles";
import classNames from "classnames";
import { BaseTypographyProps } from "./types";

type CaptionProps = BaseTypographyProps & {
  as?: "p" | "span";
  weight?: "normal" | "bold";
  width?: React.CSSProperties["width"];
};

export const Caption = ({
  as = "p",
  children,
  color,
  weight = "normal",
  className,
  textAlign = "left",
  width,
  textWrap,
  textTransform = "initial",
}: CaptionProps) => {
  const HTMLElement = as === "p" ? "p" : "span";
  return (
    <HTMLElement
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
