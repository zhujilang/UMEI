import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
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
          component: '@/pages/consoleconsole',
          title: '控制台'
        },
        {
          path: '/customer',
          component: '@/pages/customercustomer',
          title: '客服管理'
        },
        {
          path: '/finance',
          component: '@/pages/financefinance',
          title: '财务管理'
        },
        {
          path: '/notice',
          component: '@/pages/noticenotice',
          title: '通知管理'
        },
        {
          path: '/operation',
          component: '@/pages/operationoperation',
          title: '操作日志'
        },
        {
          path: '/order',
          component: '@/pages/orderorder',
          title: '订单管理'
        },
        {
          path: '/information',
          component: '@/pages/informationinformation',
          title: '资讯管理'
        },
        {
          path: '/scheme',
          component: '@/pages/schemescheme',
          title: '装修管理'
        }
        
      ]
    },
  ],
  fastRefresh: {},
});
