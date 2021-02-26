import { User } from './models/User'
import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import * as path from 'path'
import { resolvers } from './resolvers/resolvers'
console.log("here we are");

// let something: any = User()

// something.sayHello()

const typeDefs = importSchema(path.join(__dirname, 'schema/schema.graphql'))


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});