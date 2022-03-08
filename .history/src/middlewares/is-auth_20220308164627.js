const jwt = require('jsonwebtoken')

module.exports = (req) => {
    let check = null
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    if(!authHeader) {
        return check = false
    }

    const token = authHeader.split(' ')[1]
    console.log('token', token)
    if (!token || token === '') {
        return check = false
    }
    let decodedToken
  
        decodedToken = jwt.verify(token, 'hong')
        console.log('decodedToken', decodedToken)
   
        req.session.isAuth = false

    //req.session.isAuth = true
    console.log('22222222222222222222222222222222222222')
    //req.session.role_name = decodedToken.sub
    next()
}