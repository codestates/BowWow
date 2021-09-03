const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser');
//express의 req객체에 cookies 속성 부여
const app = express();
const port = 4000;
require('dotenv').config();
//env 환경변수 읽어냄

const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
//req에 body 속성 추가해서 req.body 접근 가능하게 하고 중첩된 객체 표현 허용 x 객체 안에 객체 파싱할 수 있게 하려면 true로 변경

app.use(cors({
  origin: true,
  //origin:'https://eteammerge.ga'
  credentials: true,
  'Access-Control-Expose-Headers': 'Set-Cookie',
  methods: ['GET','POST','OPTIONS','DELETE','PATCH']
}))

app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Hello World!");
});


/** 유저 관련 API **/
app.use('/users/signup',controllers.signup); //회원가입
app.post('/users/login', controllers.login); //로그인

/** 유저 마이페이지 API **/
const profile = require('./controllers/users/Profile')(app);
app.use('/profile', profile);

/** 인증 API **/
app.get('/auth', controllers.auth); //토큰 인증 관련

/** 유기견 관련 API */
const service = require('./controllers/posts/Service_list')(app);
app.use('/service', service);

/** 봉사일정 관련 API */
const volunteer = require('./controllers/posts/Volunteer_list')(app);
app.use('/volunteer', volunteer);

/* 게시글 보여주기 API */
const posts = require('./controllers/posts/post')(app);
app.use('/posts', posts);

/** 댓글 API **/
const comment = require('./controllers/comment/comments')(app);
app.use('/comments', comment);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
