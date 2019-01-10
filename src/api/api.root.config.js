let base_api_url,base_static_url,base_img_url,originId

const root=process.env.NODE_ENV

if (root==='production'){
  base_api_url="https://uatmarketing.vlinker.com.cn"
  base_static_url="https://img.vlinker.com.cn/mpwechat"
  base_img_url="https://img.vlinker.com.cn"
  originId='gh_1a6d176de937'
}else {
  base_api_url="https://uatmarketing.vlinker.com.cn:8442"
  base_static_url="https://sitimg.vlinker.com.cn/mpwechat"
  base_img_url="https://sitimg.vlinker.com.cn"
  originId='gh_c614b5c4c205'
}

export const BASE_API_URL=base_api_url
export const BASE_STATIC_URL=base_static_url
export const BASE_IMG_URL=base_img_url
export const ORIGINID=originId
