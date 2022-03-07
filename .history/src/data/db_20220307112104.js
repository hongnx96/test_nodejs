const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
		const newUser = new U(args)
		return await newUser.save()
	},
}

module.exports = mongoDataMethods
