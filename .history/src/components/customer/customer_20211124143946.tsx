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
const Customers = (props: Props) => {
//   let CustomersInfo = useSelector((state: any) => state.Customers.CustomersInfo)
//   let total = useSelector((state: any) => state.Customers.total)
  let dispatch = useDispatch()
  //下架方案
  //   换页
  const onPageChange = (page: number, pageSize?: number) => {
    props.onPageChange(page, pageSize!)
  }
  const columns = [
    
  ];
  return (
    <div>
      
      <Table rowKey="_id" columns={columns as any} dataSource={props.data} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <ConfigProvider locale={zh_CN}>
          <Pagination
            showQuickJumper
            current={props.pageNum}
            total={props.data && props.total}
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

export default Customers

function setIsModalVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

