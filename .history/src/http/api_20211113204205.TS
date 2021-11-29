import http from "./index"

export default {
    getverifyCode() {
    return http.post('/admin/showCoupon', {
      id,
      isShow
    })
  },
}