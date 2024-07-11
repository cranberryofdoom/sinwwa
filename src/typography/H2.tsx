import { colors } from "../styles";
import styles from "./H2.module.css";
import { BaseTypographyProps } from "./types";

type H2Props = BaseTypographyProps;

export const H2 = ({ children, color, textTransform }: H2Props) => {
  return (
    <h2
      style={{
        textTransform,
        color: colors[color],
      }}
      className={styles.h2}
    >
      {children}
    </h2>
  );
};
