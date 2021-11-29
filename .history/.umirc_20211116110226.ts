import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  proxy: {
    '/api': {
      target: 'localhost::8081',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login/login',
      title: '登录'
    },
    {
      path: '/',
      component: '@/pages/layouts/layouts',
      routes:[
        {
          path: '/aftersale',
          component: '@/pages/aftersale/aftersale',
          title: '售后管理'
        },
        {
          path: '/brand',
          component: '@/pages/brand/brand',
          title: '品牌管理'
        },
        {
          path: '/console',
          component: '@/pages/console/console',
          title: '控制台'
        },
        {
          path: '/customer',
          component: '@/pages/customer/customer',
          title: '客服管理'
        },
        {
          path: '/finance',
          component: '@/pages/finance/finance',
          title: '财务管理'
        },
        {
          path: '/notice',
          component: '@/pages/notice/notice',
          title: '通知管理'
        },
        {
          path: '/operation',
          component: '@/pages/operation/operation',
          title: '操作日志'
        },
        {
          path: '/order',
          component: '@/pages/order/order',
          title: '订单管理'
        },
        {
          path: '/information',
          component: '@/pages/information/information',
          title: '资讯管理'
        },
        {
          path: '/scheme',
          component: '@/pages/scheme/scheme',
          title: '装修管理'
        }
        
      ]
    },
  ],
  fastRefresh: {},
});
// 登录页面
export interface CarouselObj {
  username: string,
  password: string,
  verifyCode: string,
  
}