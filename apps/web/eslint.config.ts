import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@permashelf/eslint-config/base";
import { nextjsConfig } from "@permashelf/eslint-config/nextjs";
import { reactConfig } from "@permashelf/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
