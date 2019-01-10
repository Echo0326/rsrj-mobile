import {reqWeiXin} from './index'
import {ORIGINID} from './api.root.config'


export const  getWeiXinConfig=async(title, desc, link, imgUrl,cb
  )=> {
  const resWeiXin=await reqWeiXin(window.location.href,ORIGINID)
  // console.log(resWeiXin)
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
        title: title?title:document.title, // 分享标题
        desc: desc?desc:document.title, // 分享描述
        link: link?link:window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl?imgUrl:"http://sitimg.vlinker.com.cn/vlinkerLogo/logo.png", // 分享图标
        success: function () {
          cb&&cb()
        // 设置成功
      }})
      wx.updateTimelineShareData({
        title: title, // 分享标题
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {
          // 设置成功
          cb&&cb()
        }
      })

  })
}

