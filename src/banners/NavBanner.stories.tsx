import type { Meta, StoryObj } from "@storybook/react";
import { NavBanner } from "./NavBanner";
import { Icon, TextIcon } from "../icons";
import { Body } from "../typography";

const meta: Meta<typeof NavBanner> = {
  title: "Banners/Nav Banner",
  component: NavBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof NavBanner> = {
  args: {
    children: (
      <>
        <Icon size="medium" color="cyan" name="AccessTime" />
        <Body color="accent-ash-gray" weight="bold">
          4 days left on trial
        </Body>
      </>
    ),
  },
};

export const Neutral: StoryObj<typeof NavBanner> = {
  args: {
    variant: "neutral",
    children: (
      <>
        <Icon size="medium" color="cyan" name="AccessTime" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Body color="accent-ash-gray" weight="bold">
            3 days left on trial,&nbsp;
          </Body>
          <a
            href="/"
            onClick={() => {
              alert("Time to upgrade!");
            }}
          >
            <Body color="accent-darker-cyan" weight="bold">
              upgrade now
            </Body>
          </a>
        </div>
      </>
    ),
  },
};

export const Warning: StoryObj<typeof NavBanner> = {
  args: {
    variant: "warning",
    children: (
      <>
        <TextIcon size="medium" color="system-warning-red" name="AccessTime" />
        <Body color="accent-ash-gray" weight="bold">
          4 days left on trial
        </Body>
      </>
    ),
  },
};
