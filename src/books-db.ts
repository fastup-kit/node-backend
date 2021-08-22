import { SQLDataSource } from "datasource-sql";

export class BooksDB extends SQLDataSource {
    getBooks() {
        return this.knex
            .select("*")
            .from("books");
    }
}
