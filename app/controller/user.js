/**
 * Created by linqiaojuan on 17-7-25.
 */
const express = require('express')
const app = express.Router();
const checkLogin = require('../middleware/check_login')
//写一个登录的接口
    var people = [
        {
            uid: 'lin',
            password: '123'
        },
        {
            uid: 'li',
            password: '123456'
        }
    ];

    app.get('/check_login', checkLogin,(req, res, next) => {
        res.json({result: true});
    })

    app.post('/login', (req, res, next) => {
        var data = req.body;
        var correct = false;
        if (data.uid && data.password) {
            for (var i = 0; i < people.length; i++) {
                if (data.uid == people[i].uid && data.password == people[i].password) {
                    correct = true;
                }
            }
            if (correct) {
                let user = {uid: data.uid, password: data.password};
                req.session.loginUser = user;
                res.end(JSON.stringify({result: true}));
            } else {
                res.end(JSON.stringify({result: false, error: '用户名或密码错误'}));
            }
        }
        else {
            res.writeHead(401, {"Content-Type": "application/json; charset=utf8"});
            res.end(JSON.stringify({result: false, error: "uid or password is miss"}));
        }
    });
    app.delete('/logout', (req, res, next) => {
        var user = req.session.loginUser;
        req.session.destroy(function (err) {
            if (err) {
                res.json({result: false, error: 'logout fail'});
                return;
            }
            delete user;
            res.clearCookie('connect.sid');
            res.end(res.json({result: true}));
        });
    });

module.exports = app