import styles from "./IconDropdown.module.css";
import { ClickableIcon, ClickableIconProps, IconName } from "../icons";
import { DropdownList, DropdownListProps } from "./DropdownList";
import { OptionsRow } from "./OptionsRow";
import { DropdownSeparator } from "./DropdownSeparator";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks";

export const IconDropdown = {
  /**
   * Should render IconDropdown.Items and IconDropdown.Separators.
   */
  Root: ({
    children,
    iconName,
    label,
    width,
    alignment,
  }: {
    children: React.ReactNode;
    iconName: IconName;
    label: ClickableIconProps["label"];
    width: DropdownListProps["width"];
    alignment?: DropdownListProps["alignment"];
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useClickOutside([containerRef], () => {
      setOpen(false);
    });

    return (
      <div ref={containerRef} className={styles.root}>
        <ClickableIcon
          onClick={() => setOpen(!open)}
          label={label}
          color="black"
          size="small"
          name={iconName}
        />
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
