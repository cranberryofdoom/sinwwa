import styles from "./TableControls.module.css";
import { TextButton } from "../buttons/TextButton";
import { Input } from "../inputs";
import classNames from "classnames";
import { H3 } from "../typography";
import { Clickable } from "../buttons";

export const TableControls = {
  /**
   * Should render TableControls.Right.
   */
  ExpandableRoot: ({
    title,
    children,
    onClick,
    isExpanded,
  }: {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
    isExpanded: boolean;
  }) => {
    return (
      <Clickable
        label={isExpanded ? "Collapse" : "Expand"}
        onClick={onClick}
        className={styles.root}
      >
        <TextButton
          className={classNames(styles.expandable, {
            [styles.expanded]: isExpanded,
          })}
          iconName="ArrowDropUp"
          iconColor="accent-ash-gray"
          onClick={onClick}
        >
          {title}
        </TextButton>
        {children}
      </Clickable>
    );
  },
  /**
   * Should render TableControls.Left and TableControls.Right.
   */
  Root: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.root}>{children}</div>;
  },
  /**
   * Should render TableControls.Title or TableControls.Searchable.
   */
  Left: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.left}>{children}</div>;
  },
  Title: ({ children }: { children: React.ReactNode }) => {
    return <H3 color="accent-ash-gray">{children}</H3>;
  },
  Searchable: ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <Input
        type="search"
        leftIconName="Search"
        leftIconColor="cyan"
        {...props}
      />
    );
  },
  Right: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.right}>{children}</div>;
  },
};
