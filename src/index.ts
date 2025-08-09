import { Hono } from 'hono'
import { createDb } from './db'

// routes
import { userRoutes } from './routes/user'
import { productRoutes } from './routes/product'
import { bookRoutes } from './routes/book'

export type Variables = {
  db: ReturnType<typeof createDb>;
};


const app = new Hono<{ Bindings: Env; Variables: Variables }>().use("*", async (c, next) => {
  c.set("db", createDb(c.env.DB));
  await next();
})
  .get("/", (c) => c.json({
    success: true,
    message: "Welcome to the API!"
  })).basePath("/api")
  .route("/users", userRoutes)
  .route("/products", productRoutes)
  .route("/books", bookRoutes)

export default app
