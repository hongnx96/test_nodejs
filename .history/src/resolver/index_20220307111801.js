const resolvers = {
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllBooks(),
    },

    // Book: {
    //     author: async ({ authorId }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getAuthorById(authorId)
    // },

    Mutation: {
        createUser: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
    }
}

module.exports = resolvers
