const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
        l
		const newUser = await new User(args).save()
		return newUser
	},

    getCountUsers: async () => {
        return await User.count()
    },
}

module.exports = mongoDataMethods
