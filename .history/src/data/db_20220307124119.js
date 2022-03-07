const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
		const newUser = new User(args)
		return await newUser.save()
	},

    getCountUsers: async () => retur await User.count(),
}

module.exports = mongoDataMethods
