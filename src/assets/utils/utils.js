import MD5 from 'blueimp-md5'

/**
* @author chuwei
* @date 2019/5/16 13:37
* @description:登录密码加密
**/
function PwdMd5(str) {
  let res=MD5(str.toString())
  let temp=''
  for (let i = 0; i < res.length; i++) {
    temp+=res[i]
    if (i%2!==0){
      temp+='-'
    }
  }
  return temp.substr(0,temp.length-1).toLocaleUpperCase()
}

/**
* @author chuwei
* @date 2019/5/16 13:41
* @description:设置localStorage
**/
function SetLocalStorage(key,value) {
  if(window.localStorage){
    return window.localStorage.setItem(key,JSON.stringify(value));
  }else {
    alert("您的浏览器不支持localStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/22 21:04
* @description:移除localStorage
**/
function RemoveLocalStorage(key) {
  if(window.localStorage){
    return window.localStorage.removeItem(key);
  }else {
    alert("您的浏览器不支持localStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/16 13:46
* @description:读取localStorage
**/
function GetLocalStorage(key) {
  if(window.localStorage){
    return window.localStorage.getItem(key)?JSON.parse(window.localStorage.getItem(key)):{};
  }else {
    alert("您的浏览器不支持localStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/16 13:47
* @description:设置sessionStorage
**/
function SetSessionStorage(key,value) {
  if(window.sessionStorage){
    return window.sessionStorage.setItem(key,JSON.stringify(value));
  }else {
    alert("您的浏览器不支持sessionStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/22 21:03
* @description:移除sessionStorage
**/
function RemoveSessionStorage(key) {
  if(window.sessionStorage){
    return window.sessionStorage.removeItem(key);
  }else {
    alert("您的浏览器不支持sessionStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/16 13:48
* @description:读取sessionStorage
**/
function GetSessionStorage(key) {
  if(window.sessionStorage){
    return window.sessionStorage.getItem(key)?JSON.parse(window.sessionStorage.getItem(key)):{};
  }else {
    alert("您的浏览器不支持sessionStorage数据缓存技术,请升级您的浏览器!")
  }
}

/**
* @author chuwei
* @date 2019/5/16 13:53
* @description:校验手机号
**/
function checkPhone(value){
  if(value){
    let reg=/^1\d{10}$/
    return reg.test(value.toString().trim())
  }
}

/**
* @author chuwei
* @date 2019/5/16 13:54
* @description:校验身份证号
**/
function checkIdCard(value){
  if(value){
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(value.toString().trim());
  }
}

/**
* @author chuwei
* @date 2019/6/26 14:41
* @description:判断数据的类型
**/
function checkType(target) {
  return Object.prototype.toString.call(target).slice(8,-1)
}

/**
* @author chuwei
* @date 2019/6/26 14:43
* @description:深拷贝数组或者是对象,深度克隆（复制）
**/
function copy(target) {
  let res
  let targetType=checkType(target)
  if (targetType==='Object'){
    res={}
  } else if (targetType==='Array'){
    res=[]
  } else {
    return target
  }
  for (let i in target){
    let value=target[i]
    if (checkType(value)==='Object' || checkType(value)==='Array'){
      res[i]=copy(value)
    } else {
      res[i]=value
    }
  }
  return res
}

/**
* @author chuwei
* @date 2019/6/28 11:09
* @description:判断是否是微信浏览器
**/
function isWeixin() {
  let ua = window.navigator.userAgent.toLowerCase();
  return /MicroMessenger/i.test(ua)
}

/**
* @author chuwei
* @date 2019/7/16 15:54
* @description:通过微信内置Api判断是否是微信浏览器
**/
function isWxClient() {
  return typeof WeixinJSBridge !== "undefined"
}

/**
* @author chuwei
* @date 2019/7/17 15:25
* @description:设置sessionStorage
**/
function setSessionStorage(key,value) {
  if (window.sessionStorage){
    sessionStorage.setItem(key,JSON.stringify(value))
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/17 15:26
* @description:获取sessionStorage
**/
function getSessionStorage(key) {
  if (window.sessionStorage){
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/17 15:27
* @description:移除sessionStorage
**/
function removeSessionStorage(key) {
  if (window.sessionStorage){
    sessionStorage.removeItem(key)
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/17 15:28
* @description:设置localStorage
**/
function setLocalStorage(key,value) {
  if (window.localStorage){
    localStorage.setItem(key,JSON.stringify(value))
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/17 15:28
* @description:获取localStorage
**/
function getLocalStorage(key) {
  if (window.localStorage){
    return JSON.parse(localStorage.getItem(key))
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/17 15:29
* @description:移除localStorage
**/
function removeLocalStorage(key) {
  if (window.localStorage){
    localStorage.removeItem(key)
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2019/7/24 14:32
* @description:格式化url后面的参数
**/
function formatQuery() {
  let oGetVars = {};
  if (window.location.search.length > 1) {
    for (let aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
      aItKey = aCouples[nKeyId].split("=");
      oGetVars[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : "";
    }
  }
  return oGetVars
}

/**
* @author chuwei
* @date 2019/7/24 14:33
* @description:获取url参数
**/
function getQuery(key) {
  return decodeURI(window.location.search.replace(
    new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

/**
* @author chuwei
* @date 2019/7/25 10:17
* @description:获取n到m的随机数
**/
function random(n, m){
  n = +n || 0
  m = +m || 0
  return Math.random() * (m - n) + n;
}
export {
  PwdMd5,
  SetLocalStorage,
  GetLocalStorage,
  SetSessionStorage,
  GetSessionStorage,
  checkPhone,
  checkIdCard,
  RemoveLocalStorage,
  RemoveSessionStorage,
  checkType,
  copy,
  isWeixin,
  isWxClient,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  formatQuery,
  getQuery,
  random
}
