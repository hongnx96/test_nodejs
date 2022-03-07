const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('../schema')
const resolvers = require('../resolver')
const mongoDataMethods = require('./../data/db')

const server = async (app) => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

module.exports = server