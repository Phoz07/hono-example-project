import { Hono } from "hono";

export const productRoutes = new Hono()
    .get("/", (c) => {
        return c.json({
            success: true,
            message: "Hello From Product Route!"
        });
    });
