const getCountUser = async (mongoDataMethods) => {
    
    await mongoDataMethods.getCountUsers()
}

module.exports = {
    getCountUser
}