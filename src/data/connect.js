const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test_nodejs', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB