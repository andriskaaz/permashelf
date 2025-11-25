import { defineConfig } from "eslint/config";

import { baseConfig } from "@permashelf/eslint-config/base";
import { reactConfig } from "@permashelf/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
);
