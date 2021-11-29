import http from "./index"

export default {
  
 


 
 


  showCoupon({ id, isShow }: { id: string, isShow: boolean }) {
    return http.post('/admin/showCoupon', {
      id,
      isShow
    })
  },
 
}