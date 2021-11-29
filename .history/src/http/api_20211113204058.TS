import http from "./index"

export default {
  
 


 
 


  showCoupon({ id, isShow }: { id: string, isShow: boolean }) {
    return http.post('/admin/showCoupon', {
      id,
      isShow
    })
  },
  updateCoupon({ name, amount, threshold, start_time, end_time, number, id }:
    { name: string, amount: number, threshold: number, start_time: string, end_time: string, number: number, id: string }) {
    return http.post('/admin/updateCoupon', {
      // 优惠券名称
      name,
      // 优惠券金额
      amount,
      // 使用门槛
      threshold,
      // 开始时间
      start_time,
      // 结束时间
      end_time,
      // 优惠券数量
      number,
      id
    })
  },
}