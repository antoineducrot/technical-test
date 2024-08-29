import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, './**/resolvers.js'))

const typeDefs = mergeTypeDefs(typesArray, { all: true })
const resolvers = mergeResolvers(resolversArray)

export { resolvers, typeDefs }
