const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');
const morgan = require('morgan');

const prod = process.env.NODE_ENV === 'production';
const db = require('./models');
const passportConfig = require('./passport');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');
const { ConnectionError } = require('sequelize');
const app = express();

db.sequelize.sync({}); //{force:true}
passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin: ['http://localhost:3000','http://dothemagic.net:3000','http://221.167.218.93:3000','http://localhost:4000','http://localhost:80','http://localhost'],
    credentials: true,
}));
app.use('/', express.static('uploads'));
app.use(express.json()); //use는 미들웨어
app.use(express.urlencoded({extended:false}));
app.use(cookie('cookiesecret'));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: 'cookiesecret',
    cookie: {
        httpOnly:true,
        secure: false,
        // domain: prod && '.dothemagic.net', .점이 있어야 앞에붙는 다른 API도 적용된다.
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.status(200).send('안녕 시퀄라이즈');
});

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/hashtag', hashtagRouter);




app.listen(3065, ()=>{
    console.log(`백엔드 서버 ${3065}번 포트에서 작동중.`);
});