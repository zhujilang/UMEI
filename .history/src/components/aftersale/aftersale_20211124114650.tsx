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
      dataIndex: 'goodsTitle',
      key: 'goodsTitle',
      align: 'start',
      render: (goodsTitle: string) => (
        <span>{goodsTitle}</span>
      )
    },
    {
      title: '家居单品',
      dataIndex: 'purchaseInfo',
      key: 'purchaseInfo',
      align: 'start',
      render: (purchaseInfo: any) => (
        <span>{`${purchaseInfo.value1}·${purchaseInfo.value2}·${purchaseInfo.value3}·${purchaseInfo.value4}·${purchaseInfo.value5}·${purchaseInfo.value6}`}</span>
      )
    },
    {
      title: '类型',
      dataIndex: 'categoryId',
      key: 'categoryId',
      align: 'start'
    },
    {
      title: '价格',
      key: 'price',
      dataIndex: 'price',
      align: 'start'
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
      align: 'start',
      render: (createTime: string) => (
        <span>{dayjs(createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      )
    },
    {
      title: '上架时间',
      key: 'createTime',
      dataIndex: 'createTime',
      align: 'start',
      render: (createTime: string) => (
        <span>{dayjs(createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      )
    },
    {
      title: '状态',
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
      render: (item: AftersaleObj) => (
        <>
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

