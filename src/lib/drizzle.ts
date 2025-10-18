import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/db/schema";

if (!process.env.SUPABASE_DB_URL) {
  throw new Error("SUPABASE_DB_URL is not defined");
}

const client = postgres(process.env.SUPABASE_DB_URL);
export const db = drizzle(client, { schema });
