const { user } = require('../../models');

module.exports = async (req, res) => {
    
 if(req.query.email){
 user.findOne({ where: {email : req.query.email}})
 .then((data) => {
     if(!data){
         res.status(200).send({message: 'ok'})
     } else {
         res.status(404).send({message: 'email exist'})
     }
 })
}
}