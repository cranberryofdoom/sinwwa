import type { Meta, StoryFn } from "@storybook/react";
import { Table } from "./Table";
import { TextButton } from "../buttons/TextButton";
import { useState } from "react";
import { Divider } from "../spacers";
import { Caption } from "../typography";

const meta: Meta<typeof Table> = {
  title: "Tables/Table",
};

export default meta;

type Data = {
  id: number;
  name: string;
  distributor: string;
  quantity: string;
  price: string;
  shareOfTotalSpend: string;
};

const data: Data[] = [
  {
    id: 1,
    name: "Product 1",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 2,
    name: "Product 2",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 3,
    name: "Product 3",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
];

const longData = [
  ...data,
  {
    id: 4,
    name: "Product 4",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 5,
    name: "Product 5",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 6,
    name: "Product 6",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 7,
    name: "Product 7",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 8,
    name: "Product 8",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 9,
    name: "Product 9",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
  {
    id: 10,
    name: "Product 10",
    distributor: "Dist. Name (DC)",
    quantity: "000",
    price: "$0,000.00",
    shareOfTotalSpend: "0.00%",
  },
];

const ExampleTableBody = ({ data }: { data: Data[] }) => {
  return (
    <Table.Body>
      {data.map((item: Data) => (
        <Table.Row key={item.id}>
          <Table.Cell>
            <Caption color="accent-ash-gray">{item.name}</Caption>
          </Table.Cell>
          <Table.Cell>
            <Caption color="accent-ash-gray">{item.distributor}</Caption>
          </Table.Cell>
          <Table.Cell>
            <Caption color="accent-ash-gray">{item.quantity}</Caption>
          </Table.Cell>
          <Table.Cell>
            <Caption color="accent-ash-gray">{item.price}</Caption>
          </Table.Cell>
          <Table.Cell>
            <Caption color="accent-ash-gray">{item.shareOfTotalSpend}</Caption>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

const ExampleTableHead = () => (
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell onSort={() => alert("Sort by item name!")}>
        Item Name
      </Table.HeaderCell>
      <Table.HeaderCell onSort={() => alert("Sort by distributor!")}>
        Distributor
      </Table.HeaderCell>
      <Table.HeaderCell onSort={() => alert("Sort by quantity!")}>
        Quantity
      </Table.HeaderCell>
      <Table.HeaderCell onSort={() => alert("Sort by price!")}>
        Price
      </Table.HeaderCell>
      <Table.HeaderCell onSort={() => alert("Sort by share of total spend!")}>
        Share of Total Spend
      </Table.HeaderCell>
    </Table.Row>
  </Table.Head>
);

const ExampleTable = ({ data }: { data: Data[] }) => {
  return (
    <Table.Root>
      <ExampleTableHead />
      <ExampleTableBody data={data} />
    </Table.Root>
  );
};

export const Example: StoryFn = () => {
  return (
    <Table.Wrapper>
      <Table.Controls.Root>
        <Table.Controls.Left>
          <Table.Controls.Title>Table Name</Table.Controls.Title>
        </Table.Controls.Left>
        <Table.Controls.Right>
          <TextButton textTransform="uppercase" iconName="AttachMoney">
            Total Spend: $0.00
          </TextButton>
        </Table.Controls.Right>
      </Table.Controls.Root>
      <Divider />
      <ExampleTable data={data} />
    </Table.Wrapper>
  );
};

export const Expandable: StoryFn = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <Table.Wrapper>
      <Table.Controls.ExpandableRoot
        isExpanded={isExpanded}
        title="Table Name"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Table.Controls.Right>
          <TextButton textTransform="uppercase" iconName="AttachMoney">
            Total Spend: $0.00
          </TextButton>
        </Table.Controls.Right>
      </Table.Controls.ExpandableRoot>
      {isExpanded && (
        <>
          <Divider />
          <ExampleTable data={data} />
        </>
      )}
    </Table.Wrapper>
  );
};

export const Searchable: StoryFn = () => {
  return (
    <Table.Wrapper>
      <Table.Controls.Root>
        <Table.Controls.Left>
          <Table.Controls.Searchable placeholder="Search through item names..." />
        </Table.Controls.Left>
        <Table.Controls.Right>
          <TextButton textTransform="uppercase" iconName="AttachMoney">
            Total Spend: $0.00
          </TextButton>
          <TextButton textTransform="uppercase" iconName="FileDownload">
            Export
          </TextButton>
        </Table.Controls.Right>
      </Table.Controls.Root>
      <Divider />
      <ExampleTable data={data} />
    </Table.Wrapper>
  );
};

export const WithInfiniteScroll: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workingData, setWorkingData] = useState(longData);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: 500 }}>
      <Table.Wrapper>
        <Table.Controls.Root>
          <Table.Controls.Left>
            <Table.Controls.Searchable placeholder="Search through item names..." />
          </Table.Controls.Left>
          <Table.Controls.Right>
            <TextButton textTransform="uppercase" iconName="AttachMoney">
              Total Spend: $0.00
            </TextButton>
            <TextButton textTransform="uppercase" iconName="FileDownload">
              Export
            </TextButton>
          </Table.Controls.Right>
        </Table.Controls.Root>
        <Divider />
        <Table.Root
          isLoading={isLoading}
          onLoadMore={() => {
            setIsLoading(true);
            setTimeout(() => {
              const lastData = workingData[workingData.length - 1];
              setWorkingData([
                ...workingData,
                {
                  ...lastData,
                  id: lastData.id + 1,
                  name: `Product ${lastData.id + 1}`,
                },
                {
                  ...lastData,
                  id: lastData.id + 2,
                  name: `Product ${lastData.id + 2}`,
                },
                {
                  ...lastData,
                  id: lastData.id + 3,
                  name: `Product ${lastData.id + 3}`,
                },
                {
                  ...lastData,
                  id: lastData.id + 4,
                  name: `Product ${lastData.id + 4}`,
                },
                {
                  ...lastData,
                  id: lastData.id + 5,
                  name: `Product ${lastData.id + 5}`,
                },
              ]);
              setIsLoading(false);
            }, 1000);
          }}
        >
          <ExampleTableHead />
          <ExampleTableBody data={workingData} />
        </Table.Root>
      </Table.Wrapper>
    </div>
  );
};
