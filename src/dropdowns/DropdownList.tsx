import { useHandleScrollInfiniteScroll } from "../hooks";
import { spacing } from "../tokens";
import styles from "./DropdownList.module.css";
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
  alignment,
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
        bottom: verticalAlignment === "top" ? `100%` : undefined,
        marginBottom:
          verticalAlignment === "top" ? `${spacing.xs}px` : undefined,
        marginTop:
          verticalAlignment === "bottom" ? `${spacing.xs}px` : undefined,
        right: horizontalAlignment === "right" ? 0 : undefined,
      }}
      className={styles.dropdownList}
      ref={scrollingElement}
      onScroll={onLoadMore ? handleScroll : undefined}
    >
      {children}
    </div>
  );
};
