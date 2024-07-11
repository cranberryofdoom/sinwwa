import { colors } from "../styles";
import styles from "./H3.module.css";
import { BaseTypographyProps } from "./types";

type H3Props = BaseTypographyProps;

export const H3 = ({ children, color, textTransform }: H3Props) => {
  return (
    <h3
      style={{
        textTransform,
        color: colors[color],
      }}
      className={styles.h3}
    >
      {children}
    </h3>
  );
};
