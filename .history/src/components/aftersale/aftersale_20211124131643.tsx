import { Table, Switch, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { AftersaleObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'


interface Props {
  edit: (item: AftersaleObj) => void,
  onPageChange: (pageNum: number, pageSize: number) => void,
  pageNum: number
  pageSize: number,
  status: number
}
const Aftersales = (props: Props) => {
  let aftersaleInfo = useSelector((state: any) => state.Aftersale.aftersaleInfo)
  let total = useSelector((state: any) => state.Aftersale.total)
  let dispatch = useDispatch()
  //   换页
  const onPageChange = (page: number, pageSize?: number) => {
    props.onPageChange(page, pageSize!)
  }
  const columns = [
    {
      title: '编号',
      dataIndex: 'key',
      key: 'key',
      align: 'start'
    },
    {
      title: '订单编号',
      dataIndex: 'orderNo',
      key: 'orderNo',
      align: 'start',
    },
    {
      title: '售后单号',
      dataIndex: 'purchaseInfo',
      key: 'purchaseInfo',
      align: 'start',
      render: (purchaseInfo: any) => (
        <span>{`${purchaseInfo.value1}·${purchaseInfo.value2}·${purchaseInfo.value3}·${purchaseInfo.value4}·${purchaseInfo.value5}·${purchaseInfo.value6}`}</span>
      )
    },
    {
      title: '装修方案',
      dataIndex: 'categoryId',
      key: 'categoryId',
      align: 'start'
    },
    {
      title: '户型信息',
      key: 'price',
      dataIndex: 'price',
      align: 'start'
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
      title: '售后状态',
      key: 'status',
      dataIndex: 'status',
      align: 'start',
      render: (status: number) => (
        <>
        <div className={status== 1?'red':status==2?'blue':''}>
          {status==1?'待解决':status==2?'进行中':'已完成'}
        </div>
        </>
      )
    },
    {
        title: '问题描述',
        key: 'question',
        dataIndex: 'question',
        align: 'start',
      },
    {
      title: '操作',
      key: 'id',
      align: 'start',
      render: (item: AftersaleObj) => (
        <>
        {item.status==1?<div className={'table-foot'}>

      </div>:item.status==2?<div className={'table-foot'}>

</div>:<div className={'table-foot'}>

</div>}
        </>
      )
    }
  ];
  return (
    <div>
      
      <Table rowKey="_id" columns={columns as any} dataSource={aftersaleInfo} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider locale={zh_CN}>
          <Pagination
            showQuickJumper
            current={props.pageNum}
            total={aftersaleInfo && total}
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

export default Aftersales

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

