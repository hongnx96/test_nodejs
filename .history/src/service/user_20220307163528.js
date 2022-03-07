const bcrypt = require('bcrypt');


const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return await mongoDataMethods.getCountUsers()
}

const hashPassword = async () => {
    const saltRounds = 10;
}

module.exports = {
    getCountUsers
}