module.exports = (app) => {

const { post, user, category_content, comment } = require('../../models');
const upload = require('../../module/multer')
const router = require('express').Router();
const application = app;

        router.get('/', async (req, res) => {
            const { id } = req.query
            // await post.findOne({ where : { id: id },
            //  include: [{
            //      model: user,
            //  }, {model: comment, include: [{ model: user}, 
            //     where : {}] }]
            // }).then((data) => {
            //     if(data){
            //         res.status(200).send({message: 'load success', service : {data}})
            //     } else {
            //         res.status(404).send({message: 'load fail'})
            //     } //아이디, 닉네임, 유저 이미지
            // })
            const data1 = await post.findOne({ where: { id: id } ,
                include : [{ model: user }]})
            const data2 = await comment.findAll({ where: { posts_id: id },
                include: [{ model: user }]})
                
                if(data2.length === 1){
                res.status(200).send({message: 'ok', data : { posts: data1, comment: [...[], data2 ]}})
                } else {
                    res.status(200).send({message: 'ok', data : { posts: data1, comment: data2 }})
                }
        }),
            
        router.post('/', upload.single('input-image'), async (req, res) => {
            const {title, date, content, mobile} = req.body;
            const image = req.file.location;
                /* 클라이언트 axios request.body에 category(dogs || volunteer)로 담겨 들어오니까
                category === 'dogs'로 들어오면 */ 
            if(!title || !mobile || !content){
                res.status(422).send({message: 'insufficient parameters supplied'})
            } else if(req.body.category === 'service'){
              const data = await post.create({
                    image: image,
                    title: title,
                    mobile: mobile,
                    content: content,
                    user_id: req.body.userId
                })

                  await category_content.create({
                        categoy_id: 1,
                        posts_id: data.id
                    }).then((data) => res.status(201).send({message: 'post write success', data}))
                
            } else if(req.body.category === 'volunteer'){
                const data2 = await post.create({
                    image: image,
                    title: title,
                    mobile: mobile,
                    content: content,
                    location: location,
                    date: date,
                    user_id: req.body.userId
             })
                await category_content.create({
                    categoy_id: 2,
                    posts_id: data2.id
                }).then((data) => res.status(201).send({message: 'post write success', data}))
            }}),

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
        .then((data) => {
            if(data){
                res.status(200).send({message: 'success to update'})
            } else {
                res.status(404).send({message: 'fail to update'})
            }
        })
    }),
        router.delete('/', async (req, res) => {
        await post.destroy({where : {id : req.query.id}})
        .then((data) => {
            if(data){
            res.status(200).send({message: 'ok'})
            } else {
            res.status(404).send({message: 'invalid page'})
            }
        })
    })

    return router;
}