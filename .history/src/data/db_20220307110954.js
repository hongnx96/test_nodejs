const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),
    
    createAuthor: async args => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
    createBook: async args => {
        const newBook = new Book(args)
        return await newBook.save()
    }
}

module.exports = mongoDataMethods
