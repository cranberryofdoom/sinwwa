import styles from "./TextArea.module.css";
import { forwardRef } from "react";

export type TextAreaProps =
  {} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, forwardedRef) => {
    return (
      <div className={styles.root}>
        <textarea ref={forwardedRef} {...props} className={styles.textarea} />
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
