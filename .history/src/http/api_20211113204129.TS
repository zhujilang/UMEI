import http from "./index"

export default {
    get({ id, isShow }: { id: string, isShow: boolean }) {
    return http.post('/admin/showCoupon', {
      id,
      isShow
    })
  },
}