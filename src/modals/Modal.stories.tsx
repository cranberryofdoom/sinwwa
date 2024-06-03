import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { Body } from "../typography";
import { Divider } from "../spacers";

const meta: Meta<typeof Modal> = {
  title: "Modals/Modal",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const children = (
  <>
    <div style={{ padding: 24 }}>
      <Body color="accent-squant">You can put whatever you want in here.</Body>
    </div>
    <Divider />
    <div style={{ padding: 24 }}>
      <Body color="accent-squant">You can put whatever you want in here.</Body>
    </div>
  </>
);

export const Example: StoryFn = () => {
  return (
    <Modal.Root open onClose={() => {}}>
      <Modal.Header
        onBack={() => {}}
        onClose={() => {}}
        title="Modal Heading"
        description="Modal description"
      />
      <Modal.Body>{children}</Modal.Body>
    </Modal.Root>
  );
};

export const NoPadding: StoryFn = () => {
  return (
    <Modal.Root open onClose={() => {}}>
      <Modal.Header
        onBack={() => {}}
        onClose={() => {}}
        title="Modal Heading"
        description="Modal description"
      />
      <Modal.Body renderDirectly>{children}</Modal.Body>
    </Modal.Root>
  );
};

export const HeadlessModal: StoryFn = () => {
  return (
    <Modal.Root headless open onClose={() => {}}>
      <Modal.Body>{children}</Modal.Body>
    </Modal.Root>
  );
};
