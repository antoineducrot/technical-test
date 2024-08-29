import { ApolloServer } from 'apollo-server'

import { resolvers, typeDefs } from './graphql'

const server = new ApolloServer({
  resolvers,
  typeDefs
})
const port = 4000

server.listen({ port }).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`)
})
