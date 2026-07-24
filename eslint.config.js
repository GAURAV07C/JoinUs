import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,
  ...pluginNext.configs.recommended,
  ...pluginNext.configs["core-web-vitals"],
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    env: {
      node: true,
    },
    globals: {
      React: true,
      JSX: true,
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
  {
    ignorePatterns: [
      ".*.js",
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
    ],
  },
];
