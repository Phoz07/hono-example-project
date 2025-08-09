import { Hono } from "hono";
import type { Variables } from "..";
import { usersTable } from "../db/schema/user";

export const userRoutes = new Hono<{ Bindings: Env; Variables: Variables }>()
    .get("/", async (c) => {
        const db = c.get("db");
        try {
            const users = await db.select().from(usersTable);
            return c.json({
                success: true,
                data: users
            });
        } catch (error) {
            return c.json({
                success: false,
                message: "Failed to fetch users"
            });
        }
    });
