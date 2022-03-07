const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
		const newUser = new User(args)
		return await newUser.save()
	},

    getCount
}

module.exports = mongoDataMethods
