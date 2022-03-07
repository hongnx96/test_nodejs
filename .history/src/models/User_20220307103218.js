const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
	username: {
		type: String
	},
	pass: {
		type: String
	},
	authorId: {
		type: String
	}
})

module.exports = mongoose.model('books', BookSchema)
