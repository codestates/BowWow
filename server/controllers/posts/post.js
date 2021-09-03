module.exports = (app) => {
const defaultImage = 'https://bowwow-resource.s3.ap-northeast-2.amazonaws.com/bros_blank.jpeg'
const { post, user, category_content, comment } = require('../../models');
const upload = require('../../module/multer')
const router = require('express').Router();
const application = app;

        router.get('/', async (req, res) => {
            const { id } = req.query
            const data1 = await post.findOne({ where: { id: id } ,
                include : [{model: user}, {model: category_content}]})
            const data2 = await comment.findAll({ where: { posts_id: id },
                include: [{ model: user }]})
                delete data1.password
                if(data2.length === 1){
                res.status(200).send({message: 'ok', data : { posts: data1, comment: [ data2 ]}})
                } else {
                    res.status(200).send({message: 'ok', data : { posts: data1 , comment: data2  }})
                }
        }),
            
        router.post('/', upload.single('input-image'), async (req, res) => {
            const {title, date, content, mobile, location} = req.body;
            
            if(!title || !mobile || !content){
                res.status(422).send({message: 'insufficient parameters supplied'})
            } else {
            if(req.body.category === 'service'){
                const data = await post.create({
                        image: req.file.location,
                        title: title,
                        mobile: mobile,
                        content: content,
                        user_id: req.body.userId,
                        attributes: { exclude : ['date','location']}})
                const data2 = await category_content.create({
                        category_id: 1,
                        posts_id: data.id
                    })
                    res.status(201).send({message: "post write success", data, data2})
                } else {
                    const data = await post.create({
                        image: req.file.location,
                        title: title,
                        mobile: mobile,
                        date: date,
                        location: location,
                        content: content,
                        user_id: req.body.userId
                        })
                const data2 = await category_content.create({
                            category_id: 2,
                            posts_id: data.id
                        })
                        res.status(201).send({message: "post write success", data, data2})
                    }}
                }   
              ),

        router.patch('/', upload.single('input-image'), async (req, res) => {
            const {title, date, location, content, mobile} = req.body;
            const image = req.file.location;
            
            await post.update({
                title: title,
                date: date,
                location: location,
                content: content,
                mobile: mobile,
                image: image
            }, {where : {id : req.query.id}})
            .then( async () => {
            if(req.body.category === 'service'){
                await category_content.update({
                    category_id: 1}, {where: { posts_id: req.query.id}})
                } else {
                    await category_content.update({
                        category_id: 2}, {where: { posts_id: req.query.id}})
                }
            }).then((data) =>{
                if(data){
                    res.status(200).send({message: 'success to update'})
                } else {
                    res.status(404).send({message: 'fail to update'})
                }
            })
        }),    

        router.delete('/', async (req, res) => {
            await post.destroy({where : {id : req.query.id}})
            await comment.destroy({where: { posts_id: req.query.id}})
            await category_content.destroy({where: { posts_id: req.query.id}})
            .then(() => {
                res.status(200).send({message: 'ok'})
            })
            res.status(404).send({message: 'invalid page'})
        })   

    return router;
}