const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    if(!authHeader) {
        req.isAuth = false
        return next()
    }

    console.log('req.isAuth', req.session.isAuth)
    const token = authHeader.split(' ')[1]
    console.log('token', token)
    if (!token || token === '') {
        req.isAuth = false
        return next()
    }
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'hong')
        console.log('decodedToken', decodedToken)
    } catch (error) {
        req.isAuth = false
        return next()
    }
    req.isAuth = true
    req.role_name = decodedToken.sub
    next()
}