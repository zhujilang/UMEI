import { Table, Switch, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { SchemeObj } from '@/types'
import dayjs from 'dayjs'

interface Props {
  edit: (item: SchemeObj) => void,
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
        <div>
          {status}
        </div>
      )
    },
    {
      title: '操作',
      key: 'id',
      align: 'start',
      render: (item: SchemeObj) => (
        <>
        {}
          {/* 已上架 */}
          <div>
            {}
          </div>
          {/* 下架 */}
          <div>

          </div>
          {/* 审核中或审核未通过 */}
          <div>

          </div>
        </>
      )
    }
  ];
  return (
    <div>
      <Table rowKey="_id" columns={columns as any} dataSource={SchemeInfo} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider>
          
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Schemes

