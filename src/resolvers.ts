import { books } from "./dataset";

export const resolvers = {
    Query: {
        books: () => books,
    },
};
