import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  locale: {
    default: 'zh-CN'
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
          component: '@/pages/aftersale',
          title: '售后管理'
        },
        {
          path: '/brand',
          component: '@/pages/brand',
          title: '品牌管理'
        },
        {
          path: '/console',
          component: '@/pages/console',
          title: '控制台'
        },
        {
          path: '/customer',
          component: '@/pages/customer',
          title: '客服管理'
        },
        {
          path: '/finance',
          component: '@/pages/finance',
          title: '财务管理'
        },
        {
          path: '/notice',
          component: '@/pages/notice',
          title: '通知管理'
        },
        {
          path: '/operation',
          component: '@/pages/operation',
          title: '操作日志'
        },
        {
          path: '/order',
          component: '@/pages/order',
          title: '订单管理'
        },
        {
          path: '/scheme',
          component: '@/pages/index'
        }
        
      ]
    },
  ],
  fastRefresh: {},
});
