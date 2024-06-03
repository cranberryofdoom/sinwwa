import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavBanner } from "./MobileNavBanner";
import { Icon } from "../icons";
import { Body, Caption } from "../typography";

const meta: Meta<typeof MobileNavBanner> = {
  title: "Banners/Mobile Nav Banner",
  component: MobileNavBanner,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof MobileNavBanner> = {
  args: {
    children: (
      <>
        <Icon size="small" color="cyan" name="AccessTime" />
        <Body color="accent-ash-gray" weight="bold">
          4 days left on trial
        </Body>
      </>
    ),
  },
};

export const Neutral: StoryObj<typeof MobileNavBanner> = {
  args: {
    onClick: () => {
      alert("Time to upgrade!");
    },
    variant: "neutral",
    children: (
      <>
        <Icon size="small" color="cyan" name="AccessTime" />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Body color="accent-ash-gray" weight="bold">
            3 days left on trial
          </Body>
          <Caption color="accent-darker-cyan" weight="bold">
            Upgrade now
          </Caption>
        </div>
      </>
    ),
  },
};

export const Warning: StoryObj<typeof MobileNavBanner> = {
  args: {
    variant: "warning",
    children: (
      <>
        <Icon size="small" color="black" name="AccessTime" />
        <Body color="accent-ash-gray" weight="bold">
          4 days left on trial
        </Body>
      </>
    ),
  },
};
