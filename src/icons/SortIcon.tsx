import styles from "./SortIcon.module.css";
import classNames from "classnames";

export const SortIcon = ({
  className,
  onClick,
  sortOrder,
  size,
}: {
  className?: string;
  onClick: () => void;
  sortOrder?: "asc" | "desc";
  size: "small" | "medium" | "large";
}) => {
  return (
    <button
      className={classNames(
        className,
        styles.root,
        styles[size],
        sortOrder && styles[sortOrder],
      )}
      type="button"
      aria-labelledby="sort-icon-label"
      onClick={onClick}
    >
      <span id="sort-icon-label" hidden>
        Sort Column
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 5">
        <path d="m.875 5 5-5 5 5z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 5">
        <path d="m.875 0 5 5 5-5z"></path>
      </svg>
    </button>
  );
};
