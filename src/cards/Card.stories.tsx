import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";
import { Graphic } from "../graphics";
import { Body, H3 } from "../typography";

const meta: Meta<typeof Card> = {
  title: "Cards/Card",
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0",
        }}
      >
        <Graphic name="Cat" />
        <H3 color="accent-ash-gray">Heading</H3>
        <Body color="accent-uniform-grey">Subtext</Body>
      </div>
    </Card>
  );
};
