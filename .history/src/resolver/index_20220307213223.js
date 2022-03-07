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
                if(validateResult === 'ok') {
                    const { username, password } = args

                    const countUsers = await mongoDataMethods.getCountUsers()
                    if(countUsers === 0) {
                        const hashPassword = userService.hashPassword(password)
                        args.password = hashPassword
                        await mongoDataMethods.createUser(args)
                        return {
                            ok: true,
                            message: "create success",
                        }
                    }
                    const ckeckUsername = await mongoDataMethods.checkUsername(username)
                    if(!ckeckUsername) {
                        const hashPassword = userService.hashPassword(password)
                        args.password = hashPassword
                        await mongoDataMethods.createUser(args)
                        return {
                            ok: true,
                            message: "create success",
                        }
                    }
                    return {
                        ok: false, 
                        message: "user already exist"
                    }
                }
                return validateResult

                
            } catch (error) {
               console.log(error)
            }
        },

        updateUserById: async (parent, args, { mongoDataMethods }) => {
            try {
                const { id } = args
                const checkId = await mongoDataMethods.getUserById(id)
                console.log('checkId', checkId)
                if(checkId) {
                    const validateResult = userService.validateInput(args)
                    if(validateResult === 'ok') {
                        const { username, password } = args
                        const ckeckUsername = await mongoDataMethods.checkUsername(username)
                        if(!ckeckUsername) {
                            const hashPassword = userService.hashPassword(password)
                            args.password = hashPassword
                            await mongoDataMethods.updateUserById(args)
                            return {
                                ok: true,
                                message: "update success",
                            }
                        }
                        if(ckeckUsername.username === username) {
                            const hashPassword = userService.hashPassword(password)
                            args.password = hashPassword
                            await mongoDataMethods.updateUserById(args)
                            return {
                                ok: true,
                                message: "update success",
                            }
                        }
                        return {
                            ok: false, 
                            message: "user already exist"
                        }
                    }
                    return validateResult
                }
                return {
                    ok: false,
                    message: `no message exists with id '${id}'`
                }
            } catch (error) {
                console.log(error)
            }
        },

        deleteUserById: async (parent, args, { mongoDataMethods }) => {
            const { id } = args
            const checkId = await mongoDataMethods.getUserById(id)
            if(checkId) {
                mongoDataMethods.deleteUserById()
            }
            return {
                ok: false,
                message: `no message exists with id '${id}'`
            }
        },

        createRole: async (parent, args, { mongoDataMethods }) => {
            await mongoDataMethods.createRole(args)
        },
            
			
    }
}

module.exports = resolvers
