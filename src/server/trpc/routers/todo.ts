import { eq } from "drizzle-orm";
import { z } from "zod";

import { todos } from "@/db/schema";

import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) =>
    ctx.db.select().from(todos).orderBy(todos.createdAt),
  ),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const id = crypto.randomUUID();
      await ctx.db.insert(todos).values({
        id,
        title: input.title,
        completed: false,
      });
      return { id };
    }),

  toggle: publicProcedure
    .input(
      z.object({
        id: z.string(),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todos)
        .set({ completed: input.completed, updatedAt: new Date() })
        .where(eq(todos.id, input.id));
    }),

  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todos)
        .set({ title: input.title, updatedAt: new Date() })
        .where(eq(todos.id, input.id));
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(todos).where(eq(todos.id, input.id));
    }),
});
