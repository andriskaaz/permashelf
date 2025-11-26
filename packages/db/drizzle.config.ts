import type { Config } from "drizzle-kit";

const databaseUrl = process.env.DATABASE_URL;
console.log("databaseUrl", databaseUrl);

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL");
}

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: databaseUrl },
  casing: "snake_case",
} satisfies Config;
