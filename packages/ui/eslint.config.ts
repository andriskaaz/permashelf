import { defineConfig } from "eslint/config";

import { baseConfig } from "@permashelf/eslint-config/base";
import { reactConfig } from "@permashelf/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
  {
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
);
