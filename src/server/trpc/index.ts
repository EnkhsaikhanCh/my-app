import { todoRouter } from "./routers/todo";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => "OK"),
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
