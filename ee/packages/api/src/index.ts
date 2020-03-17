// Based on https://www.apollographql.com/docs/apollo-server/getting-started/

import { ApolloServer } from 'apollo-server'
import { typeDefs } from './TypeDefinitions'
import { resolvers } from './Resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 GQL server ready at ${url}`);
});