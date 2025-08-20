import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      "only-warn": onlyWarn,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
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
    env: {
      node: true,
    },
    globals: {
      React: true,
      JSX: true,
    },
  },
  {
    ignorePatterns: [
      ".*.js", // Ignore dotfiles
      "node_modules/",
      "dist/",
    ],
  },
  {
    overrides: [
      {
        files: ["*.js?(x)", "*.ts?(x)"],
      },
    ],
  },
];
