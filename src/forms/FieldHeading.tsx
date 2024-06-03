import styles from "./FieldHeading.module.css";

type FieldHeadingProps = {
  /**
   * If the field is optional, display (Optional) next to the label.
   * If the field is required, display * next to the label.
   */
  decoration?: "required" | "optional";
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export const FieldHeading = ({
  children,
  decoration,
  ...args
}: FieldHeadingProps) => {
  return (
    <label className={styles.label} {...args}>
      {children}
      {decoration === "optional" && (
        <span className={styles.optional}> (Optional)</span>
      )}
      {decoration === "required" && <span className={styles.required}> *</span>}
    </label>
  );
};
