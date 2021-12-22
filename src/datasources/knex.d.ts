import { knex } from 'knex';
import { Book } from './types';

declare module 'knex/types/tables' {
  interface Tables {
    book: Book;
  }
}
