import styles from "./ButtonDropdown.module.css";
import { OptionsRow } from "./OptionsRow";
import { DropdownSeparator } from "./DropdownSeparator";
import { DropdownList, DropdownListProps } from "./DropdownList";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks";
import { Button, ButtonProps } from "../buttons";

export const ButtonDropdown = {
  Root: ({
    children,
    alignment,
    width,
    label,
    leftIconName,
    variant,
    size,
  }: {
    children: React.ReactNode;
    width?: DropdownListProps["width"];
    alignment?: DropdownListProps["alignment"];
    label: string;
    leftIconName: ButtonProps["leftIconName"];
    variant: ButtonProps["variant"];
    size: ButtonProps["size"];
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useClickOutside([containerRef], () => {
      setOpen(false);
    });

    return (
      <div ref={containerRef} className={styles.root}>
        <Button
          onClick={() => setOpen(!open)}
          size={size}
          variant={variant}
          leftIconName={leftIconName}
        >
          {label}
        </Button>
        {open && (
          <DropdownList alignment={alignment} width={width}>
            {children}
          </DropdownList>
        )}
      </div>
    );
  },
  Item: OptionsRow,
  Separator: DropdownSeparator,
};
