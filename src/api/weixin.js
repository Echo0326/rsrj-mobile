import {reqWeiXin} from './index'
import {ORIGINID} from './api.root.config'
import {isWeixin} from "../assets/utils/utils"

export const  getWeiXinConfig=(data)=> {
  if (isWeixin()){
    let script=document.querySelector('#weixinjssdk')
    if (script){
      document.body.removeChild(script)
    }
    script=document.createElement('script')
    script.id='weixinjssdk'
    script.src='https://res2.wx.qq.com/open/js/jweixin-1.4.0.js'
    document.body.appendChild(script)
    script.onload=function () {
      let title,desc,link,cb,delay,imgUrl
      if (data){
        delay=data.delay
      } else {
        delay=300 //延迟加载的时间单位毫秒
      }
      //启动定时器延迟
      setTimeout(async()=>{
        if (data){
          title=data.title
          desc=data.desc
          link=data.link
          cb=data.cb
          imgUrl=data.imgUrl
        } else {
          //默认参数
          title=document.title
          desc=document.title
          link=window.location.href
          imgUrl='http://sitimg.vlinker.com.cn/vlinkerLogo/logo.png'
          cb=null
        }
        const resWeiXin=await reqWeiXin(window.location.href,ORIGINID)
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: resWeiXin.appid, // 必填，公众号的唯一标识
          timestamp:resWeiXin.timestamp , // 必填，生成签名的时间戳
          nonceStr: resWeiXin.nonceStr, // 必填，生成签名的随机串
          signature:resWeiXin.signature,// 必填，签名
          jsApiList: ['updateAppMessageShareData','updateTimelineShareData'] // 必填，需要使用的JS接口列表
        })
        wx.ready(()=>{
          wx.updateAppMessageShareData({
            title:title, // 分享标题
            desc:desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
              cb&&cb()
              // 分享以后的回调
            }})
          wx.updateTimelineShareData({
            title: title, // 分享标题
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
              // 分享以后的回调
              cb&&cb()
            }
          })
        })
        wx.error(function(res){
          getWeiXinConfig(data)
        });
      },delay)
    }
  }
}

