import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigReact from "eslint-plugin-react/configs/jsx-runtime.js";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintConfigReact,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  eslintConfigPrettier,
);
