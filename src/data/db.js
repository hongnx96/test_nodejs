const User = require('./../models/User')
const Role = require('./../models/Role')
const UserLogin = require('./../models/UserLogin')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
        console.log('args', args)
		const newUser = new User(args)
		return await newUser.save()
	},

    getUserById: async id => {
        console.log('id', id)
        return await User.findById(id)
    },

    updateUserById: async args => {
        return await User.updateOne({ _id: args.id }, { $set: args })
    },

    deleteUserById: async id => {
        return await User.findByIdAndRemove(id)
    },

    getUserByName: async username => {
        return await User.find({ username: username })
    },

    getPassword: async password => {
        return await User.find({ password: password })
    },


    createUserLogin: async data => {
        const newUserLogin = new UserLogin(data)
        await newUserLogin.save(data)
    },

    createRole: async args => {
        const newRole = new Role(args)
        return await newRole.save()
    },

    getCountUsers: async () => {
        return await User.count()
    },

    checkUsername: async (inputUsername) => {
        return await User.findOne({ username: inputUsername})
    },

    getRoleById: async id => {
        return await Role.findById(id)
    }
}

module.exports = mongoDataMethods
