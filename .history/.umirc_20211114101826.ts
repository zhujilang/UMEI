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
          title: ''
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
