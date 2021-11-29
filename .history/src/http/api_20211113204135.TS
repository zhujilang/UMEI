import http from "./index"

export default {
    get() {
    return http.post('/admin/showCoupon', {
      id,
      isShow
    })
  },
}