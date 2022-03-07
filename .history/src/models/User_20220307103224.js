const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	Id: {
		type: String
	}
})

module.exports = mongoose.model('books', BookSchema)
