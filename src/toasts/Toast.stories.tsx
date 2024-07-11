import type { Meta, StoryFn } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../buttons";
import { toast } from "react-toastify";

const meta: Meta<typeof Toast> = {
  title: "Toasts/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;

export const Example: StoryFn<typeof Toast> = () => {
  return (
    <>
      <Toast />
      <Button
        onClick={() => {
          toast.success("Yummy toast!");
        }}
        size="large"
      >
        Click me for yummy toast!
      </Button>
      <br />
      <Button
        onClick={() => {
          toast.error("Burnt toast!");
        }}
        variant="tertiary"
        size="large"
      >
        Click me for burnt toast!
      </Button>
    </>
  );
};
