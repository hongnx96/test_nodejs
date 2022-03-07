const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLoginSchema = new Schema({
	user_id: {
		type: String
	},
	online_date
	created_at: {
		type: Date, required: true, default: Date.now
	},
	updated_at: {
		type: Date, required: true, default: Date.now 
	}
})

module.exports = mongoose.model('user_logins', UserLoginSchema)