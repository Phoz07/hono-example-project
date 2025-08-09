import { drizzle } from "drizzle-orm/d1";
import { D1Database } from "@cloudflare/workers-types/experimental";

export function createDb(db: D1Database) {
    return drizzle(db);
}