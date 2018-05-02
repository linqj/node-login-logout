/**
 * Created by linqiaojuan on 17-7-24.
 */
const express = require('express');
const app = express();
const path = require("path");
const session = require('express-session');
const cookieParser = require('cookie-parser');//cookie
const proxy = require('express-http-proxy');//跨域
const bodyParser = require('body-parser');//使用req.body
const FileStore = require('session-file-store')(session);
const checkLogin = require('./app/middleware/check_login')
const questions = [
    {
        data: '2-1-3',
        num: 444,
        age: 12
    },
    {
        data: '4-5-6',
        num: 678,
        age: 13
    }];

//routers
const user = require('./app/controller/user')
const todos =require('./app/controller/todos')

app.use(bodyParser.json());
app.use(session({
    secret: '12345',
    store: new FileStore(),
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 30, httpOnly: true, secure: false}
}));
app.use(cookieParser());
app.use(bodyParser())

app.use('/api/user',user)
app.use('/api/todos',checkLogin,todos)
app.use('/api/avatar', proxy('http://api.avatardata.cn'));//解决跨域问题
//写个接口123
app.get('/123', function (req, res) {
    res.json(questions)
});

let staticPath = 'dist';
//设定静态目录
app.use(express.static(path.resolve(__dirname, '.', staticPath)));
app.use(express.query());
//所有其他的地址交给前端路由进行处理
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '.', staticPath, 'index.html'));
});

//配置服务端口
var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = app;
