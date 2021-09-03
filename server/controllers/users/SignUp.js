const { user } = require('../../models');
const crypto = require('crypto');
const upload = require('../../module/multer');
const router = require('express').Router();
const defaultImage = 'https://bowwow-resource.s3.ap-northeast-2.amazonaws.com/bros_blank.jpeg';

 module.exports =
router.post('/', upload.single('input-image'), async (req, res) => { 
const { email, nickname, password, introduce} = req.body;

 if(!email || !password ){
     return res.status(422).json({message: 'insufficient parameters supplied'});
     //클라이언트에서 이메일하고 비번 안 넘어온다면
 }

 await user.findOne({ where: { email : email }})
    .then( async (duplicate_User) => {
        if(duplicate_User){
            res.status(409).send({message: 'email exists'}) //계정 중복 가입
        } else {
            const hashpassword = crypto.createHash('sha512').update(password).digest('hex');
            if(req.body.imgCheck === 'false'){
                await user.create({
                    email: email,
                    nickname: nickname,
                    password: hashpassword,
                    introduce: introduce,
                    image: defaultImage,
                    }).then((user) => {
                   if(user){
                      return res.status(201).send({message: 'ok'})
                   }
                })
            } else {
                const image = req.file.location
                await user.create({
                    email: email,
                    nickname: nickname,
                    password: hashpassword,
                    introduce: introduce,
                    image: image,
                    }).then((user) => {
                   if(user){
                      return res.status(201).send({message: 'ok'})
                   }
                })
            }    
            
        }
    })
})