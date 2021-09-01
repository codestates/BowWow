const { user } = require('../../models');
const crypto = require('crypto');
const { generateAccessToken, generateRefreshToken } = require('../tokenFunctions')
require('dotenv').config();
module.exports = async (req, res) => {
 
 const { email, password } = req.body;
 const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
 const data = await user.findOne({
        where: { email, password: hashpassword }})
    
    if(!data){
        res.status(404).send({message: 'invalid user'})
    } else {
        delete data.dataValues.password
        // delete data.dataValues.image
        // delete data.dataValues.introduce
        // delete data.dataValues.updatedAt
        // delete data.dataValues.nickname
        
        //const accesstoken = generateAccessToken(data.dataValues); //id, email, createdAt
        //const refreshtoken = generateRefreshToken(data.dataValues);
        
        //let str='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        
        // console.log("accesstoken",accesstoken)
        // console.log("refreshtoken",accesstoken)

         res.cookie('accessToken',1)
         res.cookie('refreshToken',2)
    
       // res.writeHead({'Set-Cookie':'accessToken=1'});
        res.status(200).send({message: 'login ok', data: {userinfo: data.dataValues, accesstoken: 1, refreshtoken: 2}})
    }

}