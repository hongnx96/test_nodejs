const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getCountUsers = async (mongoDataMethods) => {
    console.log(mongoDataMethods)
    return await mongoDataMethods.getCountUsers()
}

const hashPassword = (password) => {
    const saltRounds = 12
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword
}

const validateInput = (input) => {
    //console.log('input', typeof input)
    //console.log('name', input.password)
    
    if(!input.username) {
        //console.log('vali name')
        return {
            ok: false,
            message: 'please enter username'
        }
    }
    if(input.username.length < 5 || input.username.length > 100) {
        return {
            ok: false,
            message: 'The username needs to be between 5 and 100 characters long',
        }
    }

    if(!input.password) {
        return {
            ok: false,
            message: 'please enter password'
        }
    }
    if(input.password.length < 5 || input.password.length > 100) {
        return {
            ok: false,
            message: 'The password needs to be between 5 and 100 characters long',
        }
    }

    if(!input.role_id) {
        //console.log('vali name')
        return {
            ok: false,
            message: 'please enter role'
        }
    }
    
    return 'ok'

}

const comparePassword = async (dbPassword, inputPassword) => {
    return await bcrypt.compare(inputPassword, dbPassword) 
}

const createTokens =  roleName => {
    console.log('---------------------------------------------------', roleName)
    return jwt.sign({
            iss: 'Nguyen Hong',
            sub: roleName,
            iat: new Date().setTime(),
            ext: new Date().setDate(new Date().getDate() + 3)
        }, 'hong')
}

module.exports = {
    getCountUsers,
    hashPassword,
    validateInput,
    comparePassword,
    createTokens
}