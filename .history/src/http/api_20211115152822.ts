import http from "./index"

export default {
  // 获取验证码
    getverifyCode() {
    return http.get('/admin/user/loginValidateCode')
  },
    login() {
    return http.post('/admin/user/login')
  },
}