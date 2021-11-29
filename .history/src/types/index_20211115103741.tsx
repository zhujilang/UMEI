import {
    HomeOutlined,
    AppstoreOutlined,
    ClusterOutlined,
    DollarOutlined,
    ProfileOutlined,
    CustomerServiceOutlined,
    WhatsAppOutlined,
    PictureOutlined,
    FileSearchOutlined,
    MailOutlined
  } from '@ant-design/icons';
// 首页左侧导航栏
export const NavArray = [
    {
      name: '控制台',
      icon: HomeOutlined,
      path: '/console',
      t:'console'
    },
    {
      name: '品牌管理',
      icon:AppstoreOutlined,
      path: '/brand',
      t:'brand'
    },
    {
      name: '装修方案',
      icon:ClusterOutlined,
      path: '/scheme',
      t:'scheme'
    },
    {
      name: '订单管理',
      icon:ProfileOutlined,
      path: '/order',
      t:'order'
    },
    {
      name: '财务管理',
      icon:DollarOutlined,
      path: '/user',
      t:'user'
    },
    {
      name: '售后管理',
      icon:WhatsAppOutlined,
      path: '/aftersale',
      t:'aftersale',
    },
    {
      name: '客服管理',
      icon:CustomerServiceOutlined,
      path: '/seckill',
      t:'seckill'
    },
    {
      name: '资讯管理',
      icon:PictureOutlined,
      path: '/information',
      t:'information'
    },
    {
      name: '通知管理',
      icon:MailOutlined,
      path: '/orders',
      t:'order'
    },
    {
      name: '操作日志',
      icon:FileSearchOutlined,
      path: '/operation',
      t:'operation'
    },
   
  ]