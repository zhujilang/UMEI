import { Table, Switch, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { SchemeObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'


interface Props {
  edit: (item: SchemeObj) => void,
  onPageChange: (pageNum: number, pageSize: number) => void,
  pageNum: number
  pageSize: number,
  status: string
}
const Managements = (props: Props) => {
  let managementInfo = useSelector((state: any) => state.Management.managementInfo)
  let total = useSelector((state: any) => state.Management.total)
  let dispatch = useDispatch()
  //删除人员
//   获取列表数据
 
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
      title: '用户名',
      dataIndex: 'goodsTitle',
      key: 'goodsTitle',
      align: 'start',
      render: (goodsTitle: string) => (
        <span>{goodsTitle}</span>
      )
    },
    {
      title: '管理员角色',
      dataIndex: 'purchaseInfo',
      key: 'purchaseInfo',
      align: 'start',
      render: (purchaseInfo: any) => (
        <span>{`${purchaseInfo.value1}·${purchaseInfo.value2}·${purchaseInfo.value3}·${purchaseInfo.value4}·${purchaseInfo.value5}·${purchaseInfo.value6}`}</span>
      )
    },
    {
      title: '员工姓名',
      dataIndex: 'categoryId',
      key: 'categoryId',
      align: 'start'
    },
    {
      title: '员工电话',
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
      title: '授权状态',
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
          <div>
              <Button type="link" size="small" >查看</Button>
              <Button type="link" size="small" >编辑</Button>
          </div>
      )
    }
  ];
  return (
    <div>
      <Table rowKey="_id" columns={columns as any} dataSource={managementInfo} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider locale={zh_CN}>
          <Pagination
            showQuickJumper
            current={props.pageNum}
            total={managementInfo && total}
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

export default Managements

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

