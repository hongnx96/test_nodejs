//const user = require('../service/user')
const resolvers = {
    Query: {
        users: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllUsers(),
        // user: async (parent, {id}, { mongoDataMethods }) =>
        //     await mongoDataMethods.getUserById(id),

        
        
    },

    // Book: {
    //     author: async ({ authorId }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getAuthorById(authorId)
    // },

    // User: {
    //     role: async ({ role_id }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getRoleById(role_id)
    // },

    // User: {
    //     user_login: async ({ user_id }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getUserLoginById(user_id)
    // },

    Mutation: {
        createUser: async (parent, args, { mongoDataMethods }) => {
            //const countUsers = await mongoDataMethods.getCountUsers()
            //console.log(countUsers)
           // await mongoDataMethods.createUser(args)
            // console.log('parent', parent)
            // console.log('args', args)
            const countUsers = await user.getCountUsers(mongoDataMethods)
            console.log(countUsers)
            if(countUsers === 0) {
                return {
                    ok: true,
                    message: ''
                }
            }
            
            // console.log(args)
        },

        createRole: async (parent, args, { mongoDataMethods }) => {
            await mongoDataMethods.createRole(args)
        },
            
			
    }
}

module.exports = resolvers