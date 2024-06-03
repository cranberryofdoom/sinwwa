import { colors } from "../tokens";
import styles from "./H3.module.css";

type H3Props = {
  children: string | React.ReactNode;
  color: keyof typeof colors;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
};
export const H3 = ({ children, color, dataCy, textTransform }: H3Props) => {
  return (
    <h3
      data-cy={dataCy}
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
