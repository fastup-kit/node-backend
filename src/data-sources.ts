import { BooksDB } from "./books-db";

const booksDB = new BooksDB({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

console.log(process.env.PG_CONNECTION_STRING);

async function test() {
  try {
    await booksDB.getBooks();
  } catch (err) {
    console.error(err);
  }
}

test();

export const dataSources = () => ({
  booksDB
})