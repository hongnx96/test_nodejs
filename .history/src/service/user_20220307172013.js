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
    const ckeckUsername = false
    if(!input.username) {
        return {
            ok: false,
            message: 'please enter username'
        }
    }
    if(input.username.length < 5 || input.username.length > 100) {
        return {
            ok: false,
            message: 'The username needs to be between 5 and 100 characters long',
        }
    }
    ckeckUsername = true
}

module.exports = {
    getCountUsers,
    hashPassword
}