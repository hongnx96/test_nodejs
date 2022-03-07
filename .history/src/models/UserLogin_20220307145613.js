const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserLoginSchema = new Schema({
	// user_id: {
	// 	type: String
	// },
	online_date: {
		type: Date, required: true, default: Date.now
	}
})

module.exports = mongoose.model('user_logins', UserLoginSchema)