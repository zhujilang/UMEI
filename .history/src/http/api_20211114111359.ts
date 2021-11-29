import http from "./index"

export default {
    getverifyCode() {
    return http.get('/admin/user/loginValidateCode')
  },
    lo() {
    return http.get('/admin/user/loginValidateCode')
  },
}