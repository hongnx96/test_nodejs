const jwt = require('jsonwebtoken')

module.exports = (req) => {
    console.log('middelware')
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    if(!authHeader) {
        return {
            check: false
        }
    }

    const token = authHeader.split(' ')[1]
    if (!token || token === '') {
        return {
            check: false
        }
    }
    let decodedToken
        decodedToken = jwt.verify(token, 'hong')
    //req.session.isAuth = true
    return {
        check: true,
        roleName: decodedToken.sub
    } 
}