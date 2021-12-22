import { SQLDataSource } from "@luchanso/datasource-sql";
import { Book } from "./types";

export class Database extends SQLDataSource {
  getBooks() {
    return this.knex.select("*").from("book");
  }

  addBooks(books: Book[]) {
    return this.knex("book").insert(books, [
      "id",
      "title",
      "author",
    ]);
  }

  updateBook(book: Book) {
    return this.knex<Book>("books")
      .where("id", book.id)
      .update(book, ["id", "title", "author"]);
  }

  deleteBook(id: string) {
    return this.knex<Book>("books").where("id", id).delete('id');
  }
}
