import type { Preview } from "@storybook/react";
import "normalize.css";
import "../src/styles/variables.css";
import "../src/styles/font.css";
import "../src/styles/base.css";
import "../src/styles/spacing.css";
import "../src/styles/colors.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        textTransform: /textTransform$/i,
      },
    },
  },
};

export default preview;
