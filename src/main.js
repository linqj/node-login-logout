// require ("style/main.css")
var appEle = document.getElementById("app");
var uidEle=document.getElementsByClassName('uid')[0];
var passwordEle=document.getElementsByClassName('password')[0];
var buttonInEle=document.getElementsByClassName('button-login')[0];
var buttonOutEle=document.getElementsByClassName('button-logout')[0];
window.onload = function () {
    // moni();
    check();
    buttonInEle.onclick=function(){
       var uid=uidEle.value;
       var password=passwordEle.value;
        login(uid,password);
    }
    buttonOutEle.onclick=function(){
        logout();
    }
};
//checklogin
function check(){
    fetch(`/api/user/check_login`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    }).then(function (response) {
        if (response.status === 200) {
            buttonOutEle.style.display='inline-block';
            buttonInEle.style.display='none';
        } else {
            buttonOutEle.style.display='none';
            buttonInEle.style.display='inline-block';
        }
    })
}
//请求模拟接口
function moni(){
    fetch(`/123`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    }).then(function (response) {
        if (response.status === 200) {
            return response.json();
        } else {
            return {};
        }
    }).then((data) => {
        var numList = data;
        for (var i = 0; i < numList.length; i++) {
            var oul = document.createElement('ul');
            var oli1 = document.createElement('li');
            oli1.innerHTML = numList[i].data;
            var oli2 = document.createElement('li');
            oli2.innerHTML = numList[i].num;
            var oli3 = document.createElement('li');
            oli3.innerHTML = numList[i].age;
            oul.appendChild(oli1);
            oul.appendChild(oli2);
            oul.appendChild(oli3);
            appEle.appendChild(oul);

        }
    });
}

//请求登录接口
function login(uid,password){
    fetch(`/api/user/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            uid:uid,
            password:password
        })
    }).then(function (response) {
        if (response.status === 200) {
            return response.json();
        } else {
            return {};
        }
    }).then((data) => {
        if(data.result){
            console.log('登录成功');
            buttonOutEle.style.display='inline-block';
            buttonInEle.style.display='none';
        }else{
            console.log(data.error);
        }
    });
}
function logout(){
    fetch(`/api/user/logout`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    }).then(function (response) {
        if (response.status === 200) {
            console.log('登出成功');
            buttonOutEle.style.display='none';
            buttonInEle.style.display='inline-block';
        } else {
            return ('登出失败')
        }
    })
}
