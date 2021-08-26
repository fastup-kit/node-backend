import express, { Application } from 'express'
import http from 'http';
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { plugins } from './plugins';
import { dataSources } from './data-sources';

const app = express()

async function startApollo(app: Application) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins,
    dataSources
   });
  await server.start()
  server.applyMiddleware({
    app
  });

  console.log(`Apollo started: http://127.0.0.1${server.graphqlPath} 🦄`);
}

http.createServer(app).listen(80, () => console.log('Server started 🚀'));
startApollo(app);
