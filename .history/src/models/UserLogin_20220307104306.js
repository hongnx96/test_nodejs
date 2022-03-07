const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLoginSchema = new Schema({
	role_name: {
		type: String
	},
	created_at: {
		type: Date, required: true, default: Date.now
	},
	updated_at: {
		type: Date, required: true, default: Date.now 
	}
})

module.exports = mongoose.model('user_logins', UserLoginSchema)