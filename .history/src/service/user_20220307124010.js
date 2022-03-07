const getCountUser = async (mongoDataMethods) => {
    console.log()mongoDataMethods
    await mongoDataMethods.getCountUsers()
}

module.exports = {
    getCountUser
}