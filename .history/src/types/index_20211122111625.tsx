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
    name: '人员管理',
    icon: HomeOutlined,
    t: 'console'
  },
  {
    name: '商家入驻',
    icon: HomeOutlined,
    path: '/console',
    t: 'console'
  },
  {
    name: '品牌管理',
    icon: AppstoreOutlined,
    path: '/brand',
    t: 'brand'
  },
  {
    name: '装修方案管理',
    icon: ClusterOutlined,
    path: '/scheme',
    t: 'scheme'
  },
  {
    name: '装修订单管理',
    icon: ProfileOutlined,
    path: '/order',
    t: 'order'
  },
  {
    name: '时尚资讯管理',
    icon: DollarOutlined,
    path: '/finance',
    t: 'finance'
  },
  {
    name: '操作日志',
    icon: FileSearchOutlined,
    path: '/operation',
    t: 'operation'
  },
  {
    name: '财务管理',
    icon: DollarOutlined,
    path: '/finance',
    t: 'finance'
  },
  {
    name: '评价管理',
    icon: CustomerServiceOutlined,
    path: '/customer',
    t: 'customer'
  },
  {
    name: '售后管理',
    icon: WhatsAppOutlined,
    path: '/aftersale',
    t: 'aftersale',
  },
  
 
  {
    name: '通知管理',
    icon: MailOutlined,
    path: '/notice',
    t: 'notice'
  },
  

]
// 装修
export interface SchemeObj {
  goodsTitle: string,
  categoryId: string,
  price: number,
  status: string,
  key: number,
  id: number,
  pageNum: number,
  pageSize: number,
  createTime: any,
  edit: any,
  purchaseInfo: any,
  goodsImg: any
}
//创建新方案
export interface AddObj {
  id: number,
  name: string,
  type: number,
  parentId: number,
  title: string,
  key: number,
  children: AddObj[],
  _id: string,
  list: AddObj[],
  isLeaf: boolean,
  label: string,
  value: number,
  index:number
}

export interface OrderObj {
  pageNumd: number,
  pageSize: number,
  key: number,
  orderNo: number,
  goodsTitle: number,
  purchaseInfo: string,
  totalPrice: number,
  payTime: any,
  receiverName: string,
  receiverMobile: number,
  orderStatus: any,
  id: string,
  goodsImg: any,
}

