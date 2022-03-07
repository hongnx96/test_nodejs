const resolvers = {
    Query: {
        users: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllUsers(),
    },

    // Book: {
    //     author: async ({ authorId }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getAuthorById(authorId)
    // },

    Mutation: {
        createUser: async (parent, args, { mongoDataMethods }) =>
        
			//await mongoDataMethods.createUser(args),
    }
}

module.exports = resolvers
