import { colors } from "../tokens";
import styles from "./H1.module.css";

type H1Props = {
  children: string | React.ReactNode;
  color: keyof typeof colors;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  textAlign?: "left" | "center" | "right";
  /**
   * Data attribute for cypress testing.
   */
  dataCy?: string;
};
export const H1 = ({
  children,
  color,
  dataCy,
  textTransform,
  textAlign,
}: H1Props) => {
  return (
    <h1
      data-cy={dataCy}
      style={{
        textTransform,
        textAlign,
        color: colors[color],
      }}
      className={styles.h1}
    >
      {children}
    </h1>
  );
};
