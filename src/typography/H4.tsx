import { colors } from "../styles";
import styles from "./H4.module.css";
import { BaseTypographyProps } from "./types";

type H4Props = BaseTypographyProps;

export const H4 = ({ children, color, textTransform }: H4Props) => {
  return (
    <h4
      style={{
        textTransform,
        color: colors[color],
      }}
      className={styles.h4}
    >
      {children}
    </h4>
  );
};
