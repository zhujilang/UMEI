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
  data: any,
  total:number
}
const Notice = (props: Props) => {
//   let noticeInfo = useSelector((state: any) => state.Notice.noticeInfo)
//   let total = useSelector((state: any) => state.Notice.total)
  let dispatch = useDispatch()
  //下架方案
  //   换页
  const onPageChange = (page: number, pageSize?: number) => {
    props.onPageChange(page, pageSize!)
  }
  const columns = [
    {
      title: '标号',
      dataIndex: 'key',
      key: 'key',
      align: 'start'
    },
    {
      title: '通知类型',
      dataIndex: 'type',
      key: 'type',
      align: 'start',
    },
    {
      title: '通知内容',
      dataIndex: 'contendetail',
      key: 'contendetail',
      align: 'start',

    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'start',
      render: (status: number) => (
        <>
        <div className={status==0?'blue':''}>
          {status==0?'未读':'已读'}
        </div>
        </>
      )
    },
  ];
  return (
    <div>
      
      <Table rowKey="_id" columns={columns as any} dataSource={pdata} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider locale={zh_CN}>
          <Pagination
            showQuickJumper
            current={props.pageNum}
            total={data && total}
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

export default Notice

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

