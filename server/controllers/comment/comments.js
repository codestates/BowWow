module.exports = (app) => {

    const { comment } = require('../../models');
    const { user } = require('../../models');
    const router = require('express').Router();
    const application = app;


    router.get('/', async (req, res) => {
        await comment.findAll({
            where: { posts_id : req.query.id },
            include: {
                model: user
            }
        })
            .then((data) => {
                if(data){
                    res.status(200).send({message: 'ok', data : { comment : data}})
                } else {
                    res.status(404).send({message: 'fail'})
                }
            })
    }),
    
    router.post('/', async (req, res) => {
        const data = await comment.create({
            content: req.body.content,
            user_id: req.body.userId,
            posts_id: req.body.postId
            , attributes: { exclude: ['content','user_id']}
        })
            res.status(201).send({message: 'ok', data})
    }),

    router.delete('/', async (req, res) => {
        await comment.destroy({
            where: {id: req.query.id}
        }).then((data) => {
            if(data){
                res.status(200).send({message: 'success to delete'})
            } else {
                res.status(404).send({message: 'fail to delete'})
            }
        })
    })

    return router;
}

