/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  staticDirs: ["../src/fonts"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) =>
      rule?.["test"]?.test(".svg"),
    );
    if (imageRule) {
      imageRule["exclude"] = /\.svg$/;
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
    });

    return config;
  },
};
export default config;
