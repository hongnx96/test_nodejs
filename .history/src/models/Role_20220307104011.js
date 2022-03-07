const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
	role_name: {
		type: String
	},
	created_at: {
		type: Number
	}
})

module.exports = mongoose.model('authors', AuthorSchema)