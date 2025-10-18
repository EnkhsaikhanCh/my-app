import { initTRPC, TRPCError } from "@trpc/server";

import { type Context } from "./context";

const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(
  async ({ ctx, next, path }) => {
    try {
      if (!ctx.session) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Authentication required",
          cause: "No session",
        });
      }

      const result = await next({
        ctx: {
          ...ctx,
          session: ctx.session,
        },
      });

      return result;
    } catch (error) {
      // 🧱 Error Logging (always log minimal message; verbose stack only in dev)
      const message = error instanceof Error ? error.message : String(error);
      if (process.env.NODE_ENV !== "production") {
        console.error(`[tRPC ERROR] ${path}:`, error);
      } else {
        console.error(`[tRPC ERROR] ${path}:`, message);
      }

      if (error instanceof TRPCError) {
        throw error; // already structured
      }

      // ⚠️ Unexpected error-уудыг unified TRPCError болгож хувиргана
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
        cause: error,
      });
    }
  },
);
