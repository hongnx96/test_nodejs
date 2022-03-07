const user = require('../service/user')
const resolvers = {
    Query: {
        users: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllUsers(),

        createUser: async (parent, args, { mongoDataMethods }) => {
            //const countUsers = await mongoDataMethods.getCountUsers()
            //console.log(countUsers)
            await mongoDataMethods.createUser(args)
            // const countUsers = await user.getCountUsers(mongoDataMethods)
            // console.log(countUsers)
            // if(countUsers === 0) {
            //     return 'Insert'
            // }
            
            // console.log(args)
        }
    },

    // Book: {
    //     author: async ({ authorId }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getAuthorById(authorId)
    // },

    Mutation: {
        
            
			
    }
}

module.exports = resolvers
