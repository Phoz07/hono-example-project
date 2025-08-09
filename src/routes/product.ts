import { Hono } from "hono";
import type { Variables } from "..";
import { productsTable } from "../db/schema/product";

export const productRoutes = new Hono<{ Bindings: Env; Variables: Variables }>()
    .get("/", async (c) => {
        const db = c.get("db");
        try {
            const products = await db.select().from(productsTable);
            return c.json({
                success: true,
                data: products
            });
        } catch (error) {
            return c.json({
                success: false,
                message: "Failed to fetch products"
            });
        }
    });
