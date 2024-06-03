import styles from "./Checkbox.module.css";

export const Checkbox = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} type="checkbox" {...props} />;
};
