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
  MailOutlined,
  TeamOutlined
} from '@ant-design/icons';
// 首页左侧导航栏
export const NavArray = [
  {
    name: '人员管理',
    path: '/management',
    icon: TeamOutlined,
    t: 'console'
  },
  {
    name: '商家入驻',
    icon: HomeOutlined,
    path: '/settled',
    t: 'settled'
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
    icon: PictureOutlined,
    path: '/information',
    t: 'information'
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
// 人员管理
export interface ManagementObj {
  id:number,
  username:string,
  password:string,
  roll:any,
  creatTime:any,
  updateTime:any,
  nickname:string,
  area:string,
  isEmplower:number,
  adminRole:string,
  mobile:string
}
//时尚资讯
export interface InformationObj {
  keyword:string,
  pageNum:number,
  pageSize:number,
  status:string,
  creatTime:any,
  contentDetail:any,
  contentImg:any,
  contentTitle:any,
  goodsType:any,
  headImg:any,
  headTitle:any,
  id:any,
  recommend:any,
  storeName:any,
  updateTime:any,
  state:string
}
export interface AftersaleObj {
  cause:string,
  pageNum:number,
  pageSize:number,
  status:number,
  colos:string,
  goodsId:number,
  goodsImg:string,
  goodsTitle:string,
  id:number,
  orderNo:string,
  question:string,
  receiverMobile:string, 
  receiverName:string,
  size:string,
  type:string,
  key:number
}

export interface NoticeObj {
  contendetail:string,
  pageNum:number,
  pageSize:number,
  status:number,
  time:string,
  type:string,
  key:number
}

export interface CustomerObj {
  mobile:number,
  username:string,
  userRole:
  pageNum:number,
  pageSize:number,
  time:string,
  ipaddress:any,
  key:number,
  content:string,
}

export interface OperationObj {
  orderNo:number,
  username:string,
  pageNum:number,
  pageSize:number,
  status:number,
  time:string,
  grade:string,
  key:number,
  content:string,
  img:any
}