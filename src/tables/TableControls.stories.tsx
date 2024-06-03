import type { Meta, StoryFn } from "@storybook/react";
import { TableControls } from "./TableControls";
import { TextButton } from "../buttons/TextButton";
import { useState } from "react";

const meta: Meta<typeof TableControls> = {
  title: "Tables/Table Controls",
};

export default meta;

export const Expandable: StoryFn = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <TableControls.ExpandableRoot
      isExpanded={isExpanded}
      title="Table Name"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <TableControls.Right>
        <TextButton textTransform="uppercase" iconName="AttachMoney">
          Total Spend: $0.00
        </TextButton>
      </TableControls.Right>
    </TableControls.ExpandableRoot>
  );
};

export const Searchable: StoryFn = () => {
  return (
    <TableControls.Root>
      <TableControls.Left>
        <TableControls.Searchable placeholder="Search through item names..." />
      </TableControls.Left>
      <TableControls.Right>
        <TextButton textTransform="uppercase" iconName="AttachMoney">
          Total Spend: $0.00
        </TextButton>
        <TextButton textTransform="uppercase" iconName="FileDownload">
          Export
        </TextButton>
      </TableControls.Right>
    </TableControls.Root>
  );
};
