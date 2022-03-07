const bcrypt = require('bcrypt')

const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return await mongoDataMethods.getCountUsers()
}

const hashPassword = async () => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)

}

module.exports = {
    getCountUsers
}