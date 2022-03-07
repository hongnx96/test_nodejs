const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return aw mongoDataMethods.getCountUsers()
}

module.exports = {
    getCountUsers
}