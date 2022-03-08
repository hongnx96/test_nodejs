//const user = require('../service/user')
const userService = require('./../service/user')
const auth = require('./../middlewares/is-auth');

const resolvers = {
    Query: {
        users: async (parent, args, { mongoDataMethods }) => 
			await mongoDataMethods.getAllUsers(),
        user: async (parent, {id}, { mongoDataMethods }) =>
            await mongoDataMethods.getUserById(id),
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
        createUser: async (parent, args, { mongoDataMethods }, req) => {
            try {
                console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^', req.session)
                console.log('role_name==============================================================', req.session.role_name)
                if(!req.session.isAuth) {
                    return {
                        ok: false,
                        message: 'Authenticated'
                    }
                }
                console.log('req', req)
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
                    message: `no user exists with id '${id}'`
                }
            } catch (error) {
                console.log(error)
            }
        },

        deleteUserById: async (parent, args, { mongoDataMethods }) => {
            const { id } = args
            const checkId = await mongoDataMethods.getUserById(id)
            if(checkId) {
                await mongoDataMethods.deleteUserById(id)
                return {
                    ok: true, 
                    message: "delete success"
                }
            }
            return {
                ok: false,
                message: `no user exists with id '${id}'`
            }
        },

        login: async (parent, args, { mongoDataMethods }) => {
           try {
                const { username, password } = args
                console.log(username)
                const resultUser = await mongoDataMethods.getUserByName(username);
                console.log(resultUser)
                if(resultUser.length === 0) {
                    return {
                        ok: false,
                        message: 'username or password is incorrect',
                        user: {},
                        token: ''
                    }
                }
                const result = await mongoDataMethods.getPassword(resultUser[0].password)
                console.log('result password', result)
                const comparePasswordResult = await userService.comparePassword(result[0].password, password)
                console.log('comparePasswordResult', comparePasswordResult)
                if(comparePasswordResult) {
                    const user_id = result[0]._id
                    console.log('user_id', user_id)
                    const roleResult = await mongoDataMethods.getRoleById(resultUser[0].role_id)
                    console.log('roleName++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', roleResult.role_name)
                    await mongoDataMethods.createUserLogin(resultUser[0].user_id)
                    const token = userService.createTokens(roleResult.role_name)
                    console.log(token)
                    return {
                        ok: true,
                        message: 'login success',
                        user: resultUser[0],
                        token: token
                    }
                }
                return {
                    ok: false,
                    message: 'username or password is incorrect',
                    user: {},
                    token: ''
                }
           } catch (error) {
               console.log(error)
           }

        },

        // createRole: async (req, parent, args, { mongoDataMethods }) => {
        //     console.log(req)
        //     await mongoDataMethods.createRole(args)
        // },
            
			
    }
}

module.exports = resolvers
