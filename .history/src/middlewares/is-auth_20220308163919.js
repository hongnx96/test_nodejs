const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    req.session.name = 'hello'
    console.log('==========================================================================================================', req.session)
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    if(!authHeader) {
        req.session.isAuth = false
        console.log('authHeader', req.session)
        return next()
    }

    console.log('req.isAuth', req.session)
    const token = authHeader.split(' ')[1]
    console.log('token', token)
    if (!token || token === '') {
        req.session.isAuth = false
        return next()
    }
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'hong')
        console.log('decodedToken', decodedToken)
    } catch (error) {
        req.session.isAuth = false
        return next()
    }
    req.session.user = true
    //req.session.role_name = decodedToken.sub
    next()
}