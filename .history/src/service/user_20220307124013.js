const getCountUser = async (mongoDataMethods) => {
    console.log()
    await mongoDataMethods.getCountUsers()
}

module.exports = {
    getCountUser
}