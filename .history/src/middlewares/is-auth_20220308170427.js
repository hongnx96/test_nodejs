const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    if(!authHeader) {
        req.isAuth = false
        return next()
    }

    const token = authHeader.split(' ')[1]
    console.log('token', token)
    if (!token || token === '') {
        req.isAuth = false
        return next()
    }
    console.log('111111111111111111111111111111111')
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'hong')
        console.log('decodedToken', decodedToken)
    } catch (error) {
        req.isAuth = false
        return next()
    }
    //req.session.isAuth = true
    console.log('22222222222222222222222222222222222222')
    req.role_name = decodedToken.sub
    next()
}