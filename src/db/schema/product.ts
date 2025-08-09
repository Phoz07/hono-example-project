import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable("products_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  price: int().notNull(),
  description: text().notNull(),
});
