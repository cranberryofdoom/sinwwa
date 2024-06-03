import { colors } from "../tokens";
import styles from "./H4.module.css";

type H4Props = {
  children: string | React.ReactNode;
  color: keyof typeof colors;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
};
export const H4 = ({ children, color, dataCy, textTransform }: H4Props) => {
  return (
    <h4
      data-cy={dataCy}
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
