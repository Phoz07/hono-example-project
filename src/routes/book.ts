import { Hono } from "hono";

export const bookRoutes = new Hono()
    .get("/", (c) => {
        return c.json({
            success: true,
            message: "Hello From Book Route!"
        });
    });
