import { books } from "../dataset";
import type { IResolvers } from "@graphql-tools/utils";
import { Book } from "../data-sources/types";

export const resolvers: IResolvers = {
  Query: {
    books: (parent, args, context, info) => books,
  },
  Mutation: {
    addBook: (parent, args, { dataSources }, info) => {
      console.log('-'.repeat(100));
      console.log({parent, args, info});

      const book = {
        id: Math.random().toString(),
        author: args.author,
        title: args.title
      };
      books.push(book);
      return book;
    },
    updateBook: (parent, { author, title, id }, context, info) => {
      const index = books.findIndex(book => book.id === id);

      books[index].author = author;
      books[index].title = title;

      return books[index];
    },
    deleteBook: (parent, { id }, context, info) => {
      books.splice(books.findIndex(book => book.id === id), 1);
      return id;
    }
  },
};
