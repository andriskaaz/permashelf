import { defineConfig } from "eslint/config";

import { baseConfig } from "@permashelf/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
);
