const { ApolloServer } = require('apollo-server-express')
const auth = require('./../middlewares/is-auth')

const typeDefs = require('../schema')
const resolvers = require('../resolver')
const mongoDataMethods = require('./../data/db')
//const permissions = require('./../shield')
//const privateFields = require('./../middlewares/privateFields')

const server = async (app) => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware(
        { app },
        auth
    );
}

module.exports = server