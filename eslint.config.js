import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["src/**/*.js"],
    ignores: ["node_modules/", "dist/", "build/"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2021 },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          printWidth: 80,
          trailingComma: "es5",
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
  },
];