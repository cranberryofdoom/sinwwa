import { colors } from "../styles";
import styles from "./H5.module.css";

type H5Props = {
  children: string | React.ReactNode;
  color: keyof typeof colors;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
};
export const H5 = ({ children, color, dataCy, textTransform }: H5Props) => {
  return (
    <h5
      data-cy={dataCy}
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
