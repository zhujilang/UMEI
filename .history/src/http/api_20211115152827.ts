import http from "./index"

export default {
  // 获取验证码
    getverifyCode() {
    return http.get('/admin/user/loginValidateCode')
  },
  // 登录
    login() {
    return http.post('/admin/user/login')
  },
}