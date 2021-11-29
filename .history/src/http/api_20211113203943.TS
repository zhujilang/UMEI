import http from "./index"

export default {
  
 


 
 

   showGoods({ id, isShow }: { id: string, isShow: boolean }) {
    return http.post('/admin/showGoods', {
      id,
      isShow
    })
  },
  // 添加商品
  addGoods({ name, category, pic, video, cover, originalPrice, presentPrice, discount, detail, spec, introduction, company, stock, isNewGood, isHot, isRecommend, comment, isShow, sellDesc, productionDesc }:
    {
      name: string, category: string,
      pic?: string[], video?: string[],
      cover: string, originalPrice: string, presentPrice: string,
      discount: string[],
      detail: string, 
      spec: string[],
      introduction: string,
      company: string, stock: string,
      isNewGood: boolean, isHot: boolean, isRecommend: boolean,
      comment: string[], isShow: boolean,
      sellDesc: string[], productionDesc: string[]
    }) {
    return http.post('/admin/addGoods', {
      // 商品名称
      name,
      // 商品分类
      category,
      // 商品图片
      pic,
      // 商品视频
      video,
      // 是否新品
      isHot,
      // 是否推荐
      isRecommend,
      // 封面图
      cover,
      // 原价
      originalPrice,
      // 现价
      presentPrice,
      // 优惠
      discount,
      // 商品详情
      detail,
      // 商品规格
      spec,
      // 商品简介
      introduction,
      // 商品单位
      company,
      // 商品库存
      stock,
      // 是否新品
      isNewGood,
      // 商品评价
      comment,
      // 是否显示
      isShow,
      // 推荐介绍
      sellDesc,
      // 产品介绍
      productionDesc
    })
  },
   // 修改商品
   updateGoods({ id,name, category, pic, video, cover, originalPrice, presentPrice, discount, detail, spec, introduction, company, stock, isNewGood, isHot, isRecommend, comment, isShow, sellDesc, productionDesc }:
    {
      id:string,
      name: string, category: string,
      pic?: string[], video?: string[],
      cover: string, originalPrice: string, presentPrice: string,
      discount: string[],
      detail: string, 
      spec: string[],
      introduction: string,
      company: string, stock: string,
      isNewGood: boolean, isHot: boolean, isRecommend: boolean,
      comment: string[], isShow: boolean,
      sellDesc: string[], productionDesc: string[]
    }) {
    return http.post('/admin/updateGoods', {
      id,
      // 商品名称
      name,
      // 商品分类
      category,
      // 商品图片
      pic,
      // 商品视频
      video,
      // 是否新品
      isHot,
      // 是否推荐
      isRecommend,
      // 封面图
      cover,
      // 原价
      originalPrice,
      // 现价
      presentPrice,
      // 优惠
      discount,
      // 商品详情
      detail,
      // 商品规格
      spec,
      // 商品简介
      introduction,
      // 商品单位
      company,
      // 商品库存
      stock,
      // 是否新品
      isNewGood,
      // 商品评价
      comment,
      // 是否显示
      isShow,
      // 推荐介绍
      sellDesc,
      // 产品介绍
      productionDesc
    })
  },
  // 获取
  getParams({ parentId }: { parentId: string }) {
    return http.post(`/admin/getParams`, {
      parentId
    })
  },
  // 新增商品参数
  addParams({ parentId, url, name, desc }: { parentId: string, url: string, name: string, desc: string }) {
    return http.post('/admin/addParams', {
      parentId,
      url,
      name,
      desc
    })
  },
  // 删除商品参数
  delParams({ parentId, attrId }: { parentId: string, attrId: string }) {
    return http.post('/admin/delParams', {
      parentId,
      attrId,
    })
  },
  // 修改商品参数
  updateParams({ id, url, name, desc }: { id: string, url: string, name: string, desc: string }) {
    return http.post('/admin/updateParams', {
      id,
      url,
      name,
      desc
    })
  },
  // 获取规格参数
  getSpecParams({ parentId }: { parentId: string }) {
    return http.post(`/admin/getSpecParams`, {
      parentId
    })
  },
  // 新增规格参数
  addSpecParams({ parentId, specParams }: { parentId: string, specParams: string, }) {
    return http.post('/admin/addSpecParams', {
      parentId,
      specParams
    })
  },
  // 删除规格参数
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