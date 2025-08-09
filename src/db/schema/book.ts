import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const booksTable = sqliteTable("books_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  author: text().notNull(),
  publishedYear: int().notNull(),
  genre: text().notNull(),
});
