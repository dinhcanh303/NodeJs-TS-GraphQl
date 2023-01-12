require("dotenv").config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { HelloResolver } from "./resolvers/hello";
const app = express();

const main = async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [HelloResolver], validate: false }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(
      `Start server on port ${PORT} . GraphQL server started on host:${PORT}${apolloServer.graphqlPath}`
    )
  );
};
main().catch((err) => console.log(err));
AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));
