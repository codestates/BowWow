const { user } = require('../../models');

module.exports = async (req, res) => {
    
 if(req.query.nickname){
 user.findOne({ where: {nickname : req.query.nickname}})
 .then((data) => {
     if(!data){
         res.status(200).send({message: 'ok' })
     } else {
         res.status(404).send({message: 'nickname exist'})
     }
 })
}
}