import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./src/schema/schema.js";
import { dbConnection } from "./src/starter/dbConnection.js";
import * as dotenv from "dotenv";
dotenv.config();
import sync from "./src/helper/sync.js";
import resolvers from "./src/resolvers/resolver.js";

dbConnection();

const server = new ApolloServer({
  //typeDef
  typeDefs,
  //resolver
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT },
});
//to add default data to MongoSB
// sync();
console.log("Server is ready", url);
