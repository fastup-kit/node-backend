import { Database } from "./database";

const database = new Database({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
});

export const dataSources = () => ({
  database
});

export type DataSources = ReturnType<typeof dataSources>;