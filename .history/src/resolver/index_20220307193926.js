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

                const validateUser = userService.validateInput(args)
                console.log('validateUser', validateUser === null)
                if(typeof validateUser === 'object') {
                    return validateUser
                }
                if(validateUser === null) {
                    console.log()
                    return {
                        ok: true,
                        message: 'good'
                    }
                }

                // const { username, password } = args

                // const countUsers = await mongoDataMethods.getCountUsers()
                // if(countUsers === 0) {
                //     const hashPassword = userService.hashPassword(password)
                //     args.password = hashPassword
                //     await mongoDataMethods.createUser(args)
                //     return {
                //         ok: true,
                //         message: "create success",
                //     }
                // }
                // const ckeckUsername = await mongoDataMethods.checkUsername(username)
                // if(!ckeckUsername) {
                //     const hashPassword = userService.hashPassword(password)
                //     args.password = hashPassword
                //     await mongoDataMethods.createUser(args)
                //     return {
                //         ok: true,
                //         message: "create success",
                //     }
                // }
                // return {
                //     ok: false, 
                //     message: "user already exist"
                // }
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
