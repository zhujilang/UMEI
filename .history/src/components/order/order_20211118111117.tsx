import { Table, Switch, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { SchemeObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'


interface Props {
  onPageChange: (pageNum: number, pageSize: number) => void,
  pageNum: number
  pageSize: number,
  status: string
}
const Schemes = (props: Props) => {
  let SchemeInfo = useSelector((state: any) => state.Scheme.schemeInfo)
  let total = useSelector((state: any) => state.Scheme.total)
  let dispatch = useDispatch()
  //编辑装修方案
  const edit = (item: SchemeObj) => {
    props.edit(item)
  }
  //下架方案
  const del = (item: SchemeObj) => {
    dispatch({
      type: 'Carousel/DelCarouse',
      payload: {
        id: item.id,
        status: 0
      }
    })
  }
  // 创建方案
  let add=() => {
    setIsModalVisible(true)
   }
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
      render: (item: SchemeObj) => (
        <>
          {item.status == '下架' ?
            <>
              <Button type="link" size="small" onClick={() => { edit(item) }}>查看</Button>
            </>
            : item.status == '上架' ? <>
              <Button type="link" size="small" onClick={() => { edit(item) }}>查看</Button>
              <Button type="link" size="small" onClick={() => { edit(item) }}>编辑</Button>
              <Popconfirm
                title="确定下架该方案?"
                onConfirm={() => del(item)}
                okText="确定"
                cancelText="取消"
              >
                <Button type="link"  >下架</Button>
              </Popconfirm>
            </> : item.status == '审核中' ? <>
              <Button type="link" size="small" onClick={() => { edit(item) }}>查看</Button>
              <Button type="link" size="small" onClick={() => { edit(item) }}>编辑</Button>
            </> : <>
              <Button type="link" size="small" onClick={() => { edit(item) }}>查看</Button>
              <Button type="link" size="small" onClick={() => { edit(item) }}>编辑</Button>
            </>}

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

export default Schemes

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

