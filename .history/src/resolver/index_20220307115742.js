const user = require('../service/user')
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
            //const countUsers = await mongoDataMethods.getCountUsers()
            //console.log(countUsers)
            //await mongoDataMethods.createUser(args)
            const countUsers = await user.getCountUser(mongoDataMethods)
            if(countUsers === 0) {
                return 'In'
            }
            console.log(countUsers)
            console.log(args)
        }
            
			
    }
}

module.exports = resolvers
