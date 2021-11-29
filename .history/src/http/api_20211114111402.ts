import http from "./index"

export default {
    getverifyCode() {
    return http.get('/admin/user/loginValidateCode')
  },
    login() {
    return http.get('/admin/user/loginValidateCode')
  },
}