// 首页左侧导航栏
export const NavArray = [
    {
      name: '控制台',
      
      path: '/',
      t:'home'
    },
    {
      name: '品牌管理',
      path: '/carousel',
      t:'banner'
    },
    {
      name: '装修方案',

      path: '/nav',
      t:'nav'
    },
    {
      name: '订单管理',
      path: '/recommend',
      t:'recomment'
    },
    {
      name: '财务管理',
      path: '/user',
      t:'user'
    },
    {
      name: 'shou管理',
      path: '/list',
      t:'productman',
      children: [
        {
          name: '添加商品',
          path: '/product',
          t:'product'
        },
        {
          name: '商品分类',
          path: '/class',
          t:'category'
        },
        {
          name: '商品参数',
          path: '/parameter',
          t:'proparams'
        },
        {
          name: '商品规格',
          path: '/spec',
          t:'prospec'
        },
        {
          name: '商品模型',
          path: '/model',
          t:'promodel'
        },
        {
          name: '规格参数',
          path: '/specparams',
          t:'specparams'
        }
      ]
    },
    {
      name: '秒杀管理',
      path: '/seckill',
      t:'seckill'
    },
    {
      name: '优惠券管理',
      path: '/coupon',
      t:'coupon'
    },
    {
      name: '订单管理',
      path: '/orders',
      t:'order'
    },
    {
      name: '通知管理',
      path: '/notice',
      t:'notice'
    },
    {
      name: '客服消息',
      path: '/customer',
      t:'service'
    }
  ]