require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.generateToken=(payload,passwordReset=false)=>{
    const expiration = passwordReset 
        ? (process.env.PASSWORD_RESET_TOKEN_EXPIRATION || '2m') 
        : (process.env.LOGIN_TOKEN_EXPIRATION || '30d')
    const secretKey = process.env.SECRET_KEY || 'mysecretkeyforecommercesecuretoken123'
    return jwt.sign(payload, secretKey, { expiresIn: expiration })
}