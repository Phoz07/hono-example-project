import { Hono } from 'hono'

// routes
import { userRoutes } from './routes/user'
import { productRoutes } from './routes/product'
import { bookRoutes } from './routes/book'

const app = new Hono()
  .get("/", (c) => c.json({
    success: true,
    message: "Welcome to the API!"
  })).basePath("/api")
  .route("/users", userRoutes)
  .route("/products", productRoutes)
  .route("/books", bookRoutes)

export default app
