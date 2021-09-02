module.exports = (app) => {

    const { user, post } = require('../../models')
    const router = require('express').Router();
    const upload = require('../../module/multer');
    const crypto = require('crypto');
    const application = app;

    router.get('/info', async (req, res) => {
        
       const data =  await user.findOne({ 
            where : { id: req.query.id },
            include: [{ model: post, attributes : { exclude: ['mobile', 'date', 'image', 'createdAt']} 
            }]
        })

        if(data) {
            delete data.dataValues.password
            res.status(200).send({message: 'ok', data: data})
            } else {
            res.status(401).send({message: 'fail'})
            }
        }),

        router.get('/', async (req, res) => {
            
            const data =  await user.findOne({ 
                 where : { id: req.query.id },
                attributes:{ exclude:['createdAt', 'password']}
            })

             if(data) {
                 //delete data.dataValues.password
                 res.status(200).send({message: 'ok', data: data})
                 } else {
                 res.status(401).send({message: 'fail'})
                 }
             }),

        router.patch('/', upload.single('input-image'), async (req, res) => {

            const { nickname, password, introduce} = req.body;
            const image = req.file.location
            const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
            await user.update({ 
                nickname: nickname,
                password: hashpassword,
                introduce: introduce,
                image: image
                 },
                { where : {id : req.query.id }} 
                ).then((data) => {
                    if(data){
                        res.status(200).send({message: 'success to update'})
                    } else {
                        res.status(403).send({message: 'fail to update'})
                    }
                })
        })

    return router;
}