// 首页左侧导航栏
export const NavArray = [
    {
      name: '首页',
      
      path: '/',
      t:'home'
    },
    {
      name: '轮播图管理',
    
      path: '/carousel',
      t:'banner'
    },
    {
      name: '导航管理',
      icon: BarsOutlined,
      path: '/nav',
      t:'nav'
    },
    {
      name: '推荐导航',
      icon: ReconciliationOutlined,
      path: '/recommend',
      t:'recomment'
    },
    {
      name: '用户管理',
      icon: UserOutlined,
      path: '/user',
      t:'user'
    },
    {
      name: '商品管理',
      icon: TableOutlined,
      path: '/list',
      t:'productman',
      children: [
        {
          name: '添加商品',
          icon: FileAddOutlined,
          path: '/product',
          t:'product'
        },
        {
          name: '商品分类',
          icon: FileDoneOutlined,
          path: '/class',
          t:'category'
        },
        {
          name: '商品参数',
          icon: ApartmentOutlined,
          path: '/parameter',
          t:'proparams'
        },
        {
          name: '商品规格',
          icon: FileOutlined,
          path: '/spec',
          t:'prospec'
        },
        {
          name: '商品模型',
          icon: AlignCenterOutlined,
          path: '/model',
          t:'promodel'
        },
        {
          name: '规格参数',
          icon: PartitionOutlined,
          path: '/specparams',
          t:'specparams'
        }
      ]
    },
    {
      name: '秒杀管理',
      icon: FieldTimeOutlined,
      path: '/seckill',
      t:'seckill'
    },
    {
      name: '优惠券管理',
      icon: ScheduleOutlined,
      path: '/coupon',
      t:'coupon'
    },
    {
      name: '订单管理',
      icon: MenuOutlined,
      path: '/orders',
      t:'order'
    },
    {
      name: '通知管理',
      icon: NotificationOutlined,
      path: '/notice',
      t:'notice'
    },
    {
      name: '客服消息',
      icon: MessageOutlined,
      path: '/customer',
      t:'service'
    }
  ]