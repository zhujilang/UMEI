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
  // 查看装修
  getlistGoods({id}:{id:number}) {
    return http.get(`/admin/goods/listGoods/？id=${id}`)
  },
  //装修风格
  getrest({goodsId}:{goodsId:number}) {
    return http.get(`/admin/goods/rest/？goodsId=${goodsId}`)
  },
  //新增整屋
  postsave({goodsId}:{goodsId:number}) {
    return http.get('/admin/goods/save',{

    })
  },
  //修改整屋
  postupdate({goodsId}:{goodsId:number}) {
    return http.get('/admin/goods/save',{

    })
  },
  //整屋下架
  postselected({goodsId}:{goodsId:number}) {
    return http.get('/admin/goods/save',{

    })
  },
}