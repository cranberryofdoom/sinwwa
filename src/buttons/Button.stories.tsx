import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Text",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const SmallPrimary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "small",
    variant: "primary",
  },
};

export const SmallPrimaryLoading: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const SmallPrimaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallPrimary.args,
    rightIconName: "ExpandMore",
  },
};

export const SmallPrimaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallPrimary.args,
    leftIconName: "Home",
  },
};

export const SmallPrimaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...SmallPrimary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const SmallPrimaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...SmallPrimaryWithBothIcons.args,
    isLoading: true,
  },
};

export const MediumPrimary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "medium",
    variant: "primary",
  },
};

export const MediumPrimaryLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumPrimary.args,
    isLoading: true,
  },
};

export const MediumPrimaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumPrimary.args,
    rightIconName: "ExpandMore",
  },
};

export const MediumPrimaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumPrimary.args,
    leftIconName: "Home",
  },
};

export const MediumPrimaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...MediumPrimary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const MediumPrimaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumPrimaryWithBothIcons.args,
    isLoading: true,
  },
};

export const LargePrimary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "large",
    variant: "primary",
  },
};

export const LargePrimaryLoading: StoryObj<typeof Button> = {
  args: {
    ...LargePrimary.args,
    isLoading: true,
  },
};

export const LargePrimaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...LargePrimary.args,
    rightIconName: "ExpandMore",
  },
};

export const LargePrimaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...LargePrimary.args,
    leftIconName: "Home",
  },
};

export const LargePrimaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...LargePrimary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const LargePrimaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...LargePrimaryWithBothIcons.args,
    isLoading: true,
  },
};

export const SmallSecondary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "small",
    variant: "secondary",
  },
};

export const SmallSecondaryLoading: StoryObj<typeof Button> = {
  args: {
    ...SmallSecondary.args,
    isLoading: true,
  },
};

export const SmallSecondaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallSecondary.args,
    rightIconName: "ExpandMore",
  },
};

export const SmallSecondaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallSecondary.args,
    leftIconName: "Home",
  },
};

export const SmallSecondaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...SmallSecondary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const SmallSecondaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...SmallSecondaryWithBothIcons.args,
    isLoading: true,
  },
};

export const MediumSecondary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "medium",
    variant: "secondary",
  },
};

export const MediumSecondaryLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumSecondary.args,
    isLoading: true,
  },
};

export const MediumSecondaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumSecondary.args,
    rightIconName: "ExpandMore",
  },
};

export const MediumSecondaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumSecondary.args,
    leftIconName: "Home",
  },
};

export const MediumSecondaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...MediumSecondary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const MediumSecondaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumSecondaryWithBothIcons.args,
    isLoading: true,
  },
};

export const LargeSecondary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "large",
    variant: "secondary",
  },
};

export const LargeSecondaryLoading: StoryObj<typeof Button> = {
  args: {
    ...LargeSecondary.args,
    isLoading: true,
  },
};

export const LargeSecondaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...LargeSecondary.args,
    rightIconName: "ExpandMore",
  },
};

export const LargeSecondaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...LargeSecondary.args,
    leftIconName: "Home",
  },
};

export const LargeSecondaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...LargeSecondary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const LargeSecondaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...LargeSecondaryWithBothIcons.args,
    isLoading: true,
  },
};

export const SmallTertiary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "small",
    variant: "tertiary",
  },
};

export const SmallTertiaryLoading: StoryObj<typeof Button> = {
  args: {
    ...SmallTertiary.args,
    isLoading: true,
  },
};

export const SmallTertiaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallTertiary.args,
    rightIconName: "ExpandMore",
  },
};

export const SmallTertiaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...SmallTertiary.args,
    leftIconName: "Home",
  },
};

export const SmallTertiaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...SmallTertiary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const SmallTertiaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...SmallTertiaryWithBothIcons.args,
    isLoading: true,
  },
};

export const MediumTertiary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "medium",
    variant: "tertiary",
  },
};

export const MediumTertiaryLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumTertiary.args,
    isLoading: true,
  },
};

export const MediumTertiaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumTertiary.args,
    rightIconName: "ExpandMore",
  },
};

export const MediumTertiaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...MediumTertiary.args,
    leftIconName: "Home",
  },
};

export const MediumTertiaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...MediumTertiary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const MediumTertiaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...MediumTertiaryWithBothIcons.args,
    isLoading: true,
  },
};

export const LargeTertiary: StoryObj<typeof Button> = {
  args: {
    ...Default.args,
    size: "large",
    variant: "tertiary",
  },
};

export const LargeTertiaryLoading: StoryObj<typeof Button> = {
  args: {
    ...LargeTertiary.args,
    isLoading: true,
  },
};

export const LargeTertiaryWithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...LargeTertiary.args,
    rightIconName: "ExpandMore",
  },
};

export const LargeTertiaryWithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...LargeTertiary.args,
    leftIconName: "Home",
  },
};

export const LargeTertiaryWithBothIcons: StoryObj<typeof Button> = {
  args: {
    ...LargeTertiary.args,
    rightIconName: "ExpandMore",
    leftIconName: "Home",
  },
};

export const LargeTertiaryWithBothIconsLoading: StoryObj<typeof Button> = {
  args: {
    ...LargeTertiaryWithBothIcons.args,
    isLoading: true,
  },
};
