import type { Preview } from "@storybook/react";
import "normalize.css";
import "../src/styles/variables.css";
import "../src/styles/font.css";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
