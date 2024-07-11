import { colors } from "../styles";
import styles from "./H1.module.css";
import { BaseTypographyProps } from "./types";

type H1Props = BaseTypographyProps;

export const H1 = ({
  children,
  color,
  textTransform,
  textAlign,
  textWrap,
}: H1Props) => {
  return (
    <h1
      style={{
        textTransform,
        textAlign,
        textWrap,
        color: colors[color],
      }}
      className={styles.h1}
    >
      {children}
    </h1>
  );
};
