import { Table, Switch, Button, Popconfirm, Pagination,Image } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { SchemeObj } from '@/types'

interface Props {
  edit: (item: SchemeObj) => void,
  onPageChange:(pageNum:number,pageSize:number)=>void,
  pageNum:number
  pageSize: number,
  status: string
}
const Schemes = (props: Props) => {
  let SchemeInfo = useSelector((state: any) => state.Carousel.carouselInfo)
  let total = useSelector((state: any) => state.Carousel.total)
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
        id: item._id,
        status:0
      }
    })
  }
//   换页
  const onPageChange=(pageNum:number, pageSize?:number)=>{
    props.onPageChange(pageNum,pageSize!)
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'start'
    },
    {
      title: '方案标题',
      dataIndex: 'goodsTitle',
      key: 'goodsTitle',
      align: 'start',
    },
    {
      title: '户型信息',
      dataIndex: 'purchaseInfo',
      key: 'purchaseInfo',
      align: 'start'
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
      key: 'isShow',
      dataIndex: 'isShow',
      align: 'start'
    },
    {
        title: '上架时间',
        key: 'isShow',
        dataIndex: 'isShow',
        align: 'start'
      },
      {
        title: '状态',
        key: 'isShow',
        dataIndex: 'isShow',
        align: 'start'
      },
    {
      title: '操作',
      key: 'key',
      align: 'start',
      render: (item: SchemeObj) => (
        <>
          <Button type="primary" size="small" onClick={() => { edit(item) }}>编辑</Button>
          <Popconfirm
            title="确定删除该轮播图?"
            onConfirm={() => del(item)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger className={'m-l10'} size="small">下架</Button>
          </Popconfirm>
        </>
      )
    }
  ];
  return (
    <div>
      <Table rowKey="_id" columns={columns as any} dataSource={SchemeInfo} className={'m-t10'}
        pagination={false} />
      <div className={'table-foot'}>
        <Pagination
         showQuickJumper
          pageNum={props.pageNum}
          total={SchemeInfo && total}
          className={'m-t20'}
          onChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Schemes
