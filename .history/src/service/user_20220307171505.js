const bcrypt = require('bcrypt')

const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return await mongoDataMethods.getCountUsers()
}

const hashPassword = (password) => {
    const saltRounds = 12
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword
}

const validateInput = (input) => {
    if(!input.username) {
        return {
            o
        }
    }
}

module.exports = {
    getCountUsers,
    hashPassword
}