import { colors } from "../styles";
import styles from "./H5.module.css";
import { BaseTypographyProps } from "./types";

type H5Props = BaseTypographyProps;

export const H5 = ({ children, color, textTransform }: H5Props) => {
  return (
    <h5
      style={{
        textTransform,
        color: colors[color],
      }}
      className={styles.h5}
    >
      {children}
    </h5>
  );
};
