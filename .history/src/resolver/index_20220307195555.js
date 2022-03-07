//const user = require('../service/user')
const userService = require('./../service/user')

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

    User: {
        role: async ({ role_id }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getRoleById(role_id)
    },

    // User: {
    //     user_login: async ({ user_id }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getUserLoginById(user_id)
    // },

    Mutation: {
        createUser: async (parent, args, { mongoDataMethods }) => {
            try {

                const validateResult = userService.validateInput(args)
                console.log('validateResult', validateResult)
                // if(typeof validateResult === 'object') {
                //     return validateResult
                // }
                if(validateResult == null) {
                    
                }
                return validateResult

                
            } catch (error) {
               console.log(error)
            }
        },

        createRole: async (parent, args, { mongoDataMethods }) => {
            await mongoDataMethods.createRole(args)
        },
            
			
    }
}

module.exports = resolvers
