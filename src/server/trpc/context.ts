import type { NextRequest } from "next/server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/drizzle";

export async function createContext(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  return {
    db,
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
