import {
    HomeOutlined,
    AppstoreOutlined,
    ClusterOutlined,
    DollarOutlined
  } from '@ant-design/icons';
// 首页左侧导航栏
export const NavArray = [
    {
        name: '控制台',
      },
    {
      name: '控制台',
      icon: HomeOutlined,
      path: '/',
      t:'home'
    },
    {
      name: '品牌管理',
      icon:AppstoreOutlined,
      path: '/carousel',
      t:'banner'
    },
    {
      name: '装修方案',
      icon:ClusterOutlined,
      path: '/nav',
      t:'nav'
    },
    {
      name: '订单管理',
      icon:AppstoreOutlined,
      path: '/recommend',
      t:'recomment'
    },
    {
      name: '财务管理',
      icon:AppstoreOutlined,
      path: '/user',
      t:'user'
    },
    {
      name: '售后管理',
      icon:AppstoreOutlined,
      path: '/list',
      t:'productman',
    },
    {
      name: '客服管理',
      icon:AppstoreOutlined,
      path: '/seckill',
      t:'seckill'
    },
    {
      name: '资讯管理',
      icon:AppstoreOutlined,
      path: '/coupon',
      t:'coupon'
    },
    {
      name: '通知管理',
      icon:AppstoreOutlined,
      path: '/orders',
      t:'order'
    },
    {
      name: '操作日志',
      icon:AppstoreOutlined,
      path: '/notice',
      t:'notice'
    },
   
  ]