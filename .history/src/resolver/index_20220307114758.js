const test
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
        createUser: async (parent, args, { mongoDataMethods }) => {
            const countUsers = await mongoDataMethods.countUsers();
            console.log(countUsers);
            //await mongoDataMethods.createUser(args)
            console.log(args)
        }
            
			
    }
}

module.exports = resolvers
