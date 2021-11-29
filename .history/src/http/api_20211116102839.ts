import http from "./index"
import request from "_umi-request@1.4.0@umi-request"

export const getverifyCode=async paerms=>{
  return request('/api/admin/user/loginValidateCode',{
    
  })
}