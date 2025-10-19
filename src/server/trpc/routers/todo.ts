import { eq, and } from "drizzle-orm";
import { z } from "zod";

import { todos } from "@/db/schema";

import { protectedProcedure, router } from "../trpc";

export const todoRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) =>
    ctx.db
      .select({
        id: todos.id,
        title: todos.title,
        completed: todos.completed,
      })
      .from(todos)
      .where(eq(todos.createdBy, ctx.session.user.id))
      .orderBy(todos.createdAt),
  ),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().trim().min(1).max(200),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const id = crypto.randomUUID();
      const [todo] = await ctx.db
        .insert(todos)
        .values({
          id,
          title: input.title,
          createdBy: ctx.session.user.id,
        })
        .returning();
      return todo;
    }),

  toggle: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todos)
        .set({ completed: input.completed })
        .where(
          and(eq(todos.id, input.id), eq(todos.createdBy, ctx.session.user.id)),
        );
    }),

  edit: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        title: z.string().trim().min(1).max(200),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todos)
        .set({ title: input.title })
        .where(
          and(eq(todos.id, input.id), eq(todos.createdBy, ctx.session.user.id)),
        );
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(todos)
        .where(
          and(eq(todos.id, input.id), eq(todos.createdBy, ctx.session.user.id)),
        );
    }),
});
