import { DataSources } from "../datasources";
import { GraphQLUpload } from "graphql-upload";
import { Resolvers } from "../generated/graphql";
import { createContext } from "../context";

export const resolvers: Resolvers<{ dataSources: DataSources } & ReturnType<typeof createContext>> = {
  Upload: GraphQLUpload,

  Query: {
    books: (parent, args, { dataSources: { database }}) => {
      return database.getBooks();
    },
  },
  Mutation: {
    addBook: async (parent, args, { dataSources: { database }}) => {
      const book = {
        author: args.author,
        title: args.title
      };
      const resultBooks = await database.addBooks([book]);
      return resultBooks[0];
    },
    updateBook: async (parent, book, { dataSources: { database }}) => {
      const resultBooks = await database.updateBook(book);
      return resultBooks[0];
    },
    deleteBook: async (parent, { id }, { dataSources: { database } }) => {
      const resultIds = await database.deleteBook(id);
      return resultIds[0] || null;
    }
  },
};
