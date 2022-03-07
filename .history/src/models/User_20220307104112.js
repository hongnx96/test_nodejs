const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schema = new Schema({
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
		type: Boolean
	},
	created_at: {
		type: Date, required: true, default: Date.now 
	},
	updated_at: {
		type: Date, required: true, default: Date.now 
	}
})

module.exports = mongoose.model('users', UserSchema)
