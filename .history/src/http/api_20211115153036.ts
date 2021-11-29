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
  // 获取整屋列表
  getlistOrder() {
    return http.get('/admin/goods/listOrder')
  },
  // 查看整屋
  getlist() {
    return http.get('/admin/goods/list')
  },
}