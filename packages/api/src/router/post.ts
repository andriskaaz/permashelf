import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod/v4";

// import { desc, eq } from "@permashelf/db";
// import { CreatePostSchema, Post } from "@permashelf/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

const mockPosts = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
  },
];

export const postRouter = {
  all: protectedProcedure.query(() => {
    return mockPosts;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return mockPosts.find((post) => post.id === input.id);
    }),

  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ input }) => {
      return mockPosts.push({
        id: (mockPosts.length + 1).toString(),
        title: input.title,
        content: input.content,
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(() => {
    return;
  }),
} satisfies TRPCRouterRecord;
