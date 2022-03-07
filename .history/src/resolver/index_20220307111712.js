const resolvers = {
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllBooks(),
    },

    Book: {
        author: async ({ authorId }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(authorId)
    },

    Author: {
        books: async ({ id }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks({ authorId: id })
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    }
}

module.exports = resolvers
