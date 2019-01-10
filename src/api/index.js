
import api from './api'

export const reqWeiXin=(url,originid)=>(
  api.post('/api/sign_get',{url,originid},false)
)
