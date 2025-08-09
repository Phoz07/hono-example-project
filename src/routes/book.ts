import { Hono } from "hono";
import type { Variables } from ".."
import { booksTable } from "../db/schema/book";

export const bookRoutes = new Hono<{ Bindings: Env; Variables: Variables }>()
    .get("/", async (c) => {
        const db = c.get("db");
        try {
            const books = await db.select().from(booksTable);
            return c.json({
                success: true,
                data: books
            });
        } catch (error) {
            return c.json({
                success: false,
                message: "Failed to fetch books"
            });
        }
    });
