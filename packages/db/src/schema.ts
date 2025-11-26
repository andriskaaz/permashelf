import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  vector,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const Tenants = pgTable("tenants", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name"),
  createdAt: timestamp("created").defaultNow(),
  updatedAt: timestamp("updated").$onUpdateFn(() => sql`now()`),
  deletedAt: timestamp("deleted"),
});

export const TenantsInsertSchema = createInsertSchema(Tenants, {
  name: z.string().max(64),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const Contents = pgTable("contents", {
  id: uuid().defaultRandom().primaryKey(),
  tenantId: uuid("tenant_id"),
  title: varchar({ length: 256 }),
  content: text("content"),
  embedding: vector({ dimensions: 3 }),
  createdAt: timestamp("created").defaultNow(),
  updatedAt: timestamp("updated").$onUpdateFn(() => sql`now()`),
  deletedAt: timestamp("deleted"),
});

// export const Post = pgTable("post", (t) => ({
//   id: t.uuid().notNull().primaryKey().defaultRandom(),
//   title: t.varchar({ length: 256 }).notNull(),
//   content: t.text().notNull(),
//   createdAt: t.timestamp().defaultNow().notNull(),
//   updatedAt: t
//     .timestamp({ mode: "date", withTimezone: true })
//     .$onUpdateFn(() => sql`now()`),
// }));

// export const CreatePostSchema = createInsertSchema(Post, {
//   title: z.string().max(256),
//   content: z.string().max(256),
// }).omit({
//   id: true,
//   createdAt: true,
//   updatedAt: true,
// });

export * from "./auth-schema";
