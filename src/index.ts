import express, { Application } from 'express'
import https from 'https'
import fs from 'fs'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { plugins } from './plugins';
import { dataSources } from './data-sources';

const app = express()

const options = {
  key: fs.readFileSync('192.168.0.158-key.pem'),
  cert: fs.readFileSync('192.168.0.158.pem'),
};

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

  console.log(`Apollo started: https://0.0.0.0${server.graphqlPath} 🦄`);
}

https.createServer(options, app).listen(443, () => console.log('Server started 🚀'));
startApollo(app);
