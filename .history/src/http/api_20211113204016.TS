import http from "./index"

export default {
  
 


 
 


  delSpecParams({ parentId, attrId }: { parentId: string, attrId: string }) {
    return http.post('/admin/delSpecParams', {
      parentId,
      attrId,
    })
  },
  // 修改规格参数
  updateSpecParams({ id, specParams }: { id: string, specParams: string }) {
    return http.post('/admin/updateSpecParams', {
      id,
      specParams
    })
  },

  // 获取秒杀
  getSeckill({ current, pageSize, query }: { current: number, pageSize: number, query: string }) {
    return http.get(`/admin/getSeckill?current=${current}&pageSize=${pageSize}&query=${query}`)
  },
  // 添加秒杀
  addSeckill({ start_time, end_time, goods_number, price, goods, isShow }: { price: string, start_time: string, end_time: string, goods_number: string, goods: any, isShow: boolean }) {
    return http.post('/admin/addSeckill', {
      start_time,
      end_time,
      goods_number,
      goods,
      isShow,
      price
    })
  },
  // 删除秒杀
  delSeckill({ id, goodsId }: { id: string, goodsId: string }) {
    return http.post('/admin/delSeckill', {
      id,
      goodsId,
    })
  },
  // 显示秒杀
  showSeckill({ id, isShow }: { id: string, isShow: boolean }) {
    return http.post('/admin/showSeckill', {
      id,
      isShow
    })
  },
  // 修改秒杀
  updateSeckill({ id,start_time, end_time, goods_number, goods, isShow }: { id:string,start_time: string, end_time: string, goods_number: string, goods: string, isShow: boolean }) {
    return http.post('/admin/updateSeckill', {
      // 开始时间
      start_time,
      // 结束时间
      end_time,
      // 秒杀数量
      goods_number,
      // 秒杀商品
      goods,
      // 是否显示
      isShow,
      id
    })
  },
  // 获取优惠券
  getCoupon({ current, pageSize, query }: { current: number, pageSize: number, query: string }) {
    return http.get(`/admin/getCoupon?current=${current}&pageSize=${pageSize}&query=${query}`)
  },
  addCoupon({ name, amount, threshold, start_time, end_time, number, isShow }: { name: string, amount: string, threshold: string, start_time: string, end_time: string, number: string, isShow: boolean }) {
    return http.post('/admin/addCoupon', {
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
      // 是否显示
      isShow
    })
  },
  delCoupon(id: string) {
    return http.post('/admin/delCoupon', {
      id
    })
  },
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