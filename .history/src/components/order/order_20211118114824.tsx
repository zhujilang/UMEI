import { Table, Switch, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { OrderObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'


interface Props {
  onPageChange: (pageNum: number, pageSize: number) => void,
    pageNum:number,
    pageSize:number,
    key:number,
    orderNo:number,
    goodsTitle:number,
    purchaseInfo:string,
    totalPrice:number,
    payTime:any,
    receiverName:string,
    receiverMobile:number,
    orderStatus:string,
    id:string,
    goodsImg:any
}
const Orders = (props: Props) => {
  let SchemeInfo = useSelector((state: any) => state.Scheme.schemeInfo)
  let total = useSelector((state: any) => state.Scheme.total)
  let dispatch = useDispatch()
  //下架方案
  const del = (item: OrderObj) => {
    dispatch({
      type: 'Carousel/DelCarouse',
      payload: {
        id: item.id,
        status: 0
      }
    })
  }
  // 创建方案
  //   换页
  const onPageChange = (page: number, pageSize?: number) => {
    props.onPageChange(page, pageSize!)
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'start'
    },
    {
        title: '订单编号',
        dataIndex: 'orderNo',
        key: 'orderNo',
        align: 'start',
        render: (orderNo: string) => (
          <span>{orderNo}</span>
        )
      },
    {
      title: '装修方案',
      dataIndex: 'goodsTitle',
      key: 'goodsTitle',
      align: 'start',
      render: (goodsTitle: string) => (
        <span>{goodsTitle}</span>
      )
    },
    {
      title: '户型信息',
      dataIndex: 'purchaseInfo',
      key: 'purchaseInfo',
      align: 'start',
      render: (purchaseInfo: any) => (
        <span>{`${purchaseInfo.value1}·${purchaseInfo.value2}·${purchaseInfo.value3}·${purchaseInfo.value4}·${purchaseInfo.value5}·${purchaseInfo.value6}`}</span>
      )
    },
    {
      title: '价格',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      align: 'start'
    },
    {
      title: '定金支付时间',
      key: 'payTime',
      dataIndex: 'payTime',
      align: 'start',
      render: (payTime: string) => (
        <span>{dayjs(payTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      )
    },
    {
      title: '业主姓名',
      key: 'receiverName',
      dataIndex: 'receiverName',
      align: 'start',
      
    },
    {
      title: '业主手机号',
      key: 'receiverMobile',
      dataIndex: 'receiverMobile',
      align: 'start',
    },
    {
      title: '尾款状态',
      key: 'orderStatus',
      dataIndex: 'orderStatus',
      align: 'start',
      render: (status: string) => (
        <>
        <div className={status=='上架'?'status-blue':status=='下架'?'status-grey':status=='审核中'?'status-green':'status-red'}>
          {status}
        </div>
        </>
      )
    },
    {
        title: '装修进度',
        key: 'status',
        dataIndex: 'status',
        align: 'start',
        render: (status: string) => (
          <>
          <div className={status=='上架'?'status-blue':status=='下架'?'status-grey':status=='审核中'?'status-green':'status-red'}>
            {status}
          </div>
          </>
        )
      },
    {
      title: '操作',
      key: 'id',
      align: 'start',
      render: (item: OrderObj) => (
        <>

        </>
      )
    }
  ];
  return (
    <div>
      
      <Table rowKey="_id" columns={columns as any} dataSource={SchemeInfo} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider locale={zh_CN}>
          <Pagination
            showQuickJumper
            current={props.pageNum}
            total={SchemeInfo && total}
            className={'m-t20'}
            onChange={onPageChange}
            showSizeChanger
            showTotal={total => `共 ${total} 条`}
          />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Orders

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

