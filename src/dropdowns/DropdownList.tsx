import styles from "./DropdownList.module.css";
import classNames from "classnames";
import { useHandleScrollInfiniteScroll } from "../hooks";
import * as Select from "@radix-ui/react-select";

/**
 * A dropdown list compatible with Radix UI.
 */
export const RadixDropdownList = ({
  children,
  position = "item-aligned",
}: {
  children: React.ReactNode;
  position?: Select.SelectContentProps["position"];
}) => {
  return (
    <Select.Content position={position} className={styles.selectContent}>
      <Select.Viewport>{children}</Select.Viewport>
    </Select.Content>
  );
};

export type DropdownListProps = {
  children: React.ReactNode;
  /**
   * Width of the dropdown list.
   */
  width?: number;
  alignment?: "top-left" | "bottom-left" | "top-right" | "bottom-right";
  isLoading?: boolean;
  onLoadMore?: () => void;
};
export const DropdownList = ({
  children,
  width,
  alignment = "bottom-left",
  isLoading,
  onLoadMore,
}: DropdownListProps) => {
  const { handleScroll, scrollingElement } = useHandleScrollInfiniteScroll({
    isLoading,
    onLoadMore,
  });
  const horizontalAlignment = alignment?.includes("left") ? "left" : "right";
  const verticalAlignment = alignment?.includes("top") ? "top" : "bottom";

  return (
    <div
      style={{
        width: `${width}px`,
      }}
      className={classNames(styles.dropdownList, {
        [styles.top]: verticalAlignment === "top",
        [styles.bottom]: verticalAlignment === "bottom",
        [styles.right]: horizontalAlignment === "right",
      })}
      ref={scrollingElement}
      onScroll={onLoadMore ? handleScroll : undefined}
    >
      {children}
    </div>
  );
};
