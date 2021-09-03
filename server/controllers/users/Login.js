const { user } = require('../../models');
const crypto = require('crypto');
const { generateAccessToken, generateRefreshToken, sendAccessToken, sendRefreshToken } = require('../tokenFunctions')
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
        const accesstoken = generateAccessToken(data.dataValues); //id, email, createdAt
        const refreshtoken = generateRefreshToken(data.dataValues);
        sendAccessToken(res, accesstoken);
        sendRefreshToken(res, refreshtoken);
        res.status(200).send({message: 'login ok', data: {userinfo: data.dataValues, accesstoken: accesstoken, refreshtoken: refreshtoken}})
    }

}