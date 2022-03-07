const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
		const newUser = new User(args).save()
		return await newUser
	},

    getCountUsers: async () => {
        return await User.count()
    },
}

module.exports = mongoDataMethods
