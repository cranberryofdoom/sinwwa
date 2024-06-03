import { forwardRef } from "react";
import styles from "./SearchableDropdownPositioner.module.css";

export const SearchableDropdownPositioner = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.root}>
      {children}
    </div>
  );
});

SearchableDropdownPositioner.displayName = "SearchableDropdownPositioner";
