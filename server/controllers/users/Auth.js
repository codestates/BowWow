const { checkRefresh, generateAccessToken, sendAccessToken, checkAccess} = require('../../controllers/tokenFunctions');

module.exports = async (req, res) => {
    
    //const access = req.headers['cookie'].split('accessToken=')[1].split(';')[0]
    //const refresh = req.headers['cookie'].split('refreshToken=')[1].split(';')[0]

    const access = req.headers['accesstoken'];
    const refresh = req.headers['refreshtoken'];
    
    const check = checkAccess(access);
    
    if(check){ //액세스 토큰이 유효하면
        res.status(200).send({message: 'token ok', data: {userinfo: check.id}})
    } else { //액세스 토큰이 유효하지 않으면
        const userdata = checkRefresh(refresh); //리프레쉬 토큰 검증
        if(!userdata){
            res.status(401).send({ message : 'fail'})
        } else {
            delete userdata.password
            const accessToken = generateAccessToken(userdata);
            sendAccessToken(res, accessToken)
            res.status(200).send({message: 'token request ok', data: { userInfo : userdata}})
        }
    }
  
}