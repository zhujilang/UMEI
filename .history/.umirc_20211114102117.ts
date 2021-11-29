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
          title: '客服'
        },
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: '/',
          component: '@/pages/index'
        }
        
      ]
    },
  ],
  fastRefresh: {},
});
