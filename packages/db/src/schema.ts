import { sql } from "drizzle-orm";
import { pgTable, uuid, text, timestamp, varchar, vector } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const Tenants = pgTable("tenants", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name"),
  created: timestamp("created"),
  updated: timestamp("updated"),
  deleted: timestamp("deleted"),
});

export const TenantsInsertSchema = createInsertSchema(Tenants, {
  name: z.string().max(64),
}).omit({
  id: true,
  created: true,
  updated: true,
  deleted: true,
});

export const Contents = pgTable("contents", {
	id: uuid().defaultRandom(),
	tenantId: uuid("tenant_id"),
	title: varchar({ length: 256 }),
  content: text("content"),
	estimate: varchar({ length: 256 }),
	embedding: vector({ dimensions: 3 }),
	created: timestamp("created"),
	updated: timestamp("updated"),
	deleted: timestamp("deleted"),
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
