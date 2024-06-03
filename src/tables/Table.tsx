import styles from "./Table.module.css";
import { TableControls } from "./TableControls";
import { Loading } from "../loaders";
import { SortIcon } from "../icons/SortIcon";
import classNames from "classnames";
import { useHandleScrollInfiniteScroll } from "../hooks";
import { forwardRef } from "react";
import { Body } from "../typography";

export const Table = {
  /**
   * Should render Table.Controls and Table.Root.
   */
  Wrapper: ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.wrapper}>{children}</div>;
  },
  Controls: TableControls,
  /**
   * Should render Table.Head and Table.Body.
   */
  Root: ({
    children,
    isLoading,
    onLoadMore,
    onScroll,
    hasEmptyData,
    renderPlaceholder,
  }: {
    children: React.ReactNode;
    isLoading?: boolean;
    onLoadMore?: () => void;
    onScroll?: (element: HTMLDivElement) => void;
    hasEmptyData?: boolean;
    renderPlaceholder?: () => React.ReactNode;
  }) => {
    const { scrollingElement, handleScroll } = useHandleScrollInfiniteScroll({
      isLoading,
      onLoadMore,
      onScroll,
    });

    const showEmptyPlaceholder = hasEmptyData && !isLoading;

    return (
      <div
        ref={scrollingElement}
        onScroll={onLoadMore ? handleScroll : undefined}
        className={classNames(styles.root, {
          [styles.empty]: showEmptyPlaceholder,
        })}
      >
        <table className={styles.table}>{children}</table>
        {isLoading && (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}
        {showEmptyPlaceholder && (
          <div className={styles.emptyPlaceholder}>
            {renderPlaceholder ? (
              renderPlaceholder()
            ) : (
              <Body color="accent-ash-gray">No rows found.</Body>
            )}
          </div>
        )}
      </div>
    );
  },
  /**
   * Should render Table.Row.
   */
  Head: ({ children }: { children: React.ReactNode }) => {
    return <thead className={styles.tableHead}>{children}</thead>;
  },
  HeaderCell: ({
    textWrap,
    children,
    onSort,
    sortOrder,
    className,
  }: {
    textWrap?: React.CSSProperties["textWrap"];
    children: React.ReactNode;
    onSort?: () => void;
    sortOrder?: "asc" | "desc";
    className?: string;
  }) => {
    return (
      <th className={classNames(styles.tableHeaderCell, className)}>
        <div
          style={{
            textWrap,
          }}
          className={styles.tableHeaderCellContent}
        >
          {children}
          {onSort && (
            <SortIcon size="small" onClick={onSort} sortOrder={sortOrder} />
          )}
        </div>
      </th>
    );
  },
  Body: forwardRef<HTMLTableSectionElement, { children: React.ReactNode }>(
    ({ children }, ref) => {
      return (
        <tbody ref={ref} className={styles.tableBody}>
          {children}
        </tbody>
      );
    },
  ),
  /**
   * Should render Table.HeaderCell or Table.Cell.
   */
  Row: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <tr className={classNames(styles.tableRow, className)}>{children}</tr>
    );
  },
  Cell: ({
    children,
    className,
    ...rest
  }: {
    children: React.ReactNode;
    className?: string;
  } & React.TdHTMLAttributes<HTMLTableCellElement>) => {
    return (
      <td {...rest} className={classNames(styles.tableCell, className)}>
        {children}
      </td>
    );
  },
};

Table.Body.displayName = "Table.Body";
