/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// require (\"style/main.css\")\nvar appEle = document.getElementById(\"app\");\nvar uidEle=document.getElementsByClassName('uid')[0];\nvar passwordEle=document.getElementsByClassName('password')[0];\nvar buttonInEle=document.getElementsByClassName('button-login')[0];\nvar buttonOutEle=document.getElementsByClassName('button-logout')[0];\nwindow.onload = function () {\n    // moni();\n    check();\n    buttonInEle.onclick=function(){\n       var uid=uidEle.value;\n       var password=passwordEle.value;\n        login(uid,password);\n    }\n    buttonOutEle.onclick=function(){\n        logout();\n    }\n};\n//checklogin\nfunction check(){\n    fetch(`/api/check_login`, {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        credentials: 'same-origin'\n    }).then(function (response) {\n        if (response.status === 200) {\n            buttonOutEle.style.display='inline-block';\n            buttonInEle.style.display='none';\n        } else {\n            buttonOutEle.style.display='none';\n            buttonInEle.style.display='inline-block';\n        }\n    })\n}\n//请求模拟接口\nfunction moni(){\n    fetch(`/123`, {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        credentials: 'same-origin'\n    }).then(function (response) {\n        if (response.status === 200) {\n            return response.json();\n        } else {\n            return {};\n        }\n    }).then((data) => {\n        var numList = data;\n        for (var i = 0; i < numList.length; i++) {\n            var oul = document.createElement('ul');\n            var oli1 = document.createElement('li');\n            oli1.innerHTML = numList[i].data;\n            var oli2 = document.createElement('li');\n            oli2.innerHTML = numList[i].num;\n            var oli3 = document.createElement('li');\n            oli3.innerHTML = numList[i].age;\n            oul.appendChild(oli1);\n            oul.appendChild(oli2);\n            oul.appendChild(oli3);\n            appEle.appendChild(oul);\n\n        }\n    });\n}\n\n//请求登录接口\nfunction login(uid,password){\n    fetch(`/api/login`, {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n        },\n        credentials: 'same-origin',\n        body: JSON.stringify({\n            uid:uid,\n            password:password\n        })\n    }).then(function (response) {\n        if (response.status === 200) {\n            return response.json();\n        } else {\n            return {};\n        }\n    }).then((data) => {\n        if(data.result){\n            console.log('登录成功');\n            buttonOutEle.style.display='inline-block';\n            buttonInEle.style.display='none';\n        }else{\n            console.log(data.error);\n        }\n    });\n}\nfunction logout(){\n    fetch(`/api/logout`, {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n        },\n        credentials: 'same-origin'\n    }).then(function (response) {\n        if (response.status === 200) {\n            console.log('登出成功');\n            buttonOutEle.style.display='none';\n            buttonInEle.style.display='inline-block';\n        } else {\n            return ('登出失败')\n        }\n    })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcXVpcmUgKFwic3R5bGUvbWFpbi5jc3NcIilcbnZhciBhcHBFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbnZhciB1aWRFbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndWlkJylbMF07XG52YXIgcGFzc3dvcmRFbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGFzc3dvcmQnKVswXTtcbnZhciBidXR0b25JbkVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b24tbG9naW4nKVswXTtcbnZhciBidXR0b25PdXRFbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uLWxvZ291dCcpWzBdO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBtb25pKCk7XG4gICAgY2hlY2soKTtcbiAgICBidXR0b25JbkVsZS5vbmNsaWNrPWZ1bmN0aW9uKCl7XG4gICAgICAgdmFyIHVpZD11aWRFbGUudmFsdWU7XG4gICAgICAgdmFyIHBhc3N3b3JkPXBhc3N3b3JkRWxlLnZhbHVlO1xuICAgICAgICBsb2dpbih1aWQscGFzc3dvcmQpO1xuICAgIH1cbiAgICBidXR0b25PdXRFbGUub25jbGljaz1mdW5jdGlvbigpe1xuICAgICAgICBsb2dvdXQoKTtcbiAgICB9XG59O1xuLy9jaGVja2xvZ2luXG5mdW5jdGlvbiBjaGVjaygpe1xuICAgIGZldGNoKGAvYXBpL2NoZWNrX2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgYnV0dG9uT3V0RWxlLnN0eWxlLmRpc3BsYXk9J2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICBidXR0b25JbkVsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk91dEVsZS5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgICAgIGJ1dHRvbkluRWxlLnN0eWxlLmRpc3BsYXk9J2lubGluZS1ibG9jayc7XG4gICAgICAgIH1cbiAgICB9KVxufVxuLy/or7fmsYLmqKHmi5/mjqXlj6NcbmZ1bmN0aW9uIG1vbmkoKXtcbiAgICBmZXRjaChgLzEyM2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBudW1MaXN0ID0gZGF0YTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHZhciBvbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG9saTEuaW5uZXJIVE1MID0gbnVtTGlzdFtpXS5kYXRhO1xuICAgICAgICAgICAgdmFyIG9saTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgb2xpMi5pbm5lckhUTUwgPSBudW1MaXN0W2ldLm51bTtcbiAgICAgICAgICAgIHZhciBvbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG9saTMuaW5uZXJIVE1MID0gbnVtTGlzdFtpXS5hZ2U7XG4gICAgICAgICAgICBvdWwuYXBwZW5kQ2hpbGQob2xpMSk7XG4gICAgICAgICAgICBvdWwuYXBwZW5kQ2hpbGQob2xpMik7XG4gICAgICAgICAgICBvdWwuYXBwZW5kQ2hpbGQob2xpMyk7XG4gICAgICAgICAgICBhcHBFbGUuYXBwZW5kQ2hpbGQob3VsKTtcblxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8v6K+35rGC55m75b2V5o6l5Y+jXG5mdW5jdGlvbiBsb2dpbih1aWQscGFzc3dvcmQpe1xuICAgIGZldGNoKGAvYXBpL2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1aWQ6dWlkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmKGRhdGEucmVzdWx0KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXmiJDlip8nKTtcbiAgICAgICAgICAgIGJ1dHRvbk91dEVsZS5zdHlsZS5kaXNwbGF5PSdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgYnV0dG9uSW5FbGUuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvZ291dCgpe1xuICAgIGZldGNoKGAvYXBpL2xvZ291dGAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55m75Ye65oiQ5YqfJyk7XG4gICAgICAgICAgICBidXR0b25PdXRFbGUuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgICAgICBidXR0b25JbkVsZS5zdHlsZS5kaXNwbGF5PSdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICgn55m75Ye65aSx6LSlJylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);