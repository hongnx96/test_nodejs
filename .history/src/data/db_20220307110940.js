const User = require('./../models/User')

const mongoDataMethods = {
    getAllUsers: async () => await User.find(),

    getAllBooks: async (condition = null) => 
        condition === null ? await Book.find() : await Book.find(condition),
    getBookById: async id => await Book.findById(id),
    
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
