import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  locale: {
    default: 'zh-CN',
    antd:true,
    baseNavigator:false
  },
  proxy: {
    '/api': {
      target: 'http://47.108.69.213:8081',
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
      title: '首页',
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
          title: ''
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
          title: '装修订单管理'
        },
        {
          path: '/information',
          component: '@/pages/information/information',
          title: '时尚资讯管理'
        },
        {
          path: '/scheme',
          component: '@/pages/scheme/scheme/scheme',
          title: '装修方案管理'
        },
        {
          path: '/management',
          component: '@/pages/management/management',
          title: '人员管理'
        },
        {
          path: '/settled',
          component: '@/pages/settled/settled',
          title: '商家入驻'
        },
        
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