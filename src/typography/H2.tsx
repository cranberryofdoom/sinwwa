import { colors } from "../tokens";
import styles from "./H2.module.css";

type H2Props = {
  children: string | React.ReactNode;
  color: keyof typeof colors;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
};
export const H2 = ({ children, color, dataCy, textTransform }: H2Props) => {
  return (
    <h2
      data-cy={dataCy}
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
