const bcrypt = require('bcrypt')

const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return await mongoDataMethods.getCountUsers()
}

const hashPassword = async () => {
    const saltRounds = 12
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
}

module.exports = {
    getCountUsers
}