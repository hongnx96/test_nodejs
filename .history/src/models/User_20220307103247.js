const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	role_id: {
		type: String
	},
	is_deleted: {
		t
	}
})

module.exports = mongoose.model('books', BookSchema)