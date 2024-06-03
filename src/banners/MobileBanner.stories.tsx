import type { Meta, StoryFn } from "@storybook/react";

import { MobileBanner } from "./MobileBanner";

const meta: Meta<typeof MobileBanner> = {
  title: "Banners/Mobile Banner",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Example: StoryFn = () => {
  return (
    <MobileBanner.Root>
      <MobileBanner.Body>
        <MobileBanner.Header iconName="DesktopWindows" color="black">
          We recommend you use desktop!
        </MobileBanner.Header>
        <MobileBanner.Description>
          This page works better on desktop devices, and you will be missing out
          on extra information that won’t be displayed on phones.
        </MobileBanner.Description>
      </MobileBanner.Body>
      <MobileBanner.Footer>
        <MobileBanner.PrimaryCTA onClick={() => {}}>
          I understand
        </MobileBanner.PrimaryCTA>
        <MobileBanner.SecondaryCTA onClick={() => {}}>
          Don&apos;t show this message again
        </MobileBanner.SecondaryCTA>
      </MobileBanner.Footer>
    </MobileBanner.Root>
  );
};
