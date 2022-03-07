const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createUser: async args => {
        console.log('args', args)
		const newUser = new User(args)
		return await newUser.save()
	},

    createRole: async args => {
        const new
    },

    getCountUsers: async () => {
        return await User.count()
    },
}

module.exports = mongoDataMethods
