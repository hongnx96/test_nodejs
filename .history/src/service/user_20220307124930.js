const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return mongoDataMethods.getCountUsers()
}

module.exports = {
    getCountUsers
}