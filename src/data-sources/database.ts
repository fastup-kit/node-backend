import { SQLDataSource } from "datasource-sql";
import { Book } from "./types";

export class Database extends SQLDataSource {
  getBooks() {
    return this.knex.select<Book[]>("*").from("books");
  }

  addBooks(books: Book[]) {
    return this.knex<Book[]>("books").insert(books, [
      "id",
      "title",
      "author",
    ]) as Promise<Book[]>;
  }

  updateBook(book: Book) {
    return this.knex<Book>("books")
      .where("id", book.id)
      .update(book, ["id", "title", "author"]) as Promise<Book[]>;
  }

  deleteBook(id: string) {
    return this.knex<Book>("books").where("id", id).delete('id') as Promise<string[]>;
  }
}
