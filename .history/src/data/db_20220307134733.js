const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
        console.log(args)
		const newUser = await new User(args).save()
        console.log(newUser)
		return newUser
	},

    getCountUsers: async () => {
        return await User.count()
    },
}

module.exports = mongoDataMethods
