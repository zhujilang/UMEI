import { Table, Switch, Button, Popconfirm, Pagination,Image } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { SchemeObj } from '@/types'

interface Props {
  edit: (item: SchemeObj) => void,
  onPageChange:(page:number,pageSize:number)=>void,
  current:number
  pageSize: number,
  query: string
}
const Schemes = (props: Props) => {
  let carouselInfo = useSelector((state: any) => state.Carousel.carouselInfo)
  let total = useSelector((state: any) => state.Carousel.total)
  let dispatch = useDispatch()
  //修改轮播图状态
  const onChange = (isShow: boolean, item: SchemeObj) => {
    dispatch({
      type: 'Carousel/EditStatus',
      payload: {
        id: item._id,
        isShow: isShow
      }
    })
  }
  //编辑轮播图
  const edit = (item: SchemeObj) => {
    props.edit(item)
  }
  //删除轮播图
  const del = (item: SchemeObj) => {
    dispatch({
      type: 'Carousel/DelCarouse',
      payload: {
        id: item._id,
        pageSize: props.pageSize,
        current: props.current,
        query: props.query
      }
    })
  }
  const onPageChange=(page:number, pageSize?:number)=>{
    props.onPageChange(page,pageSize!)
  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'center'
    },
    {
      title: '方案标题',
      dataIndex: 'url',
      key: 'url',
      align: 'center',
    },
    {
      title: '户型信息',
      dataIndex: 'url',
      key: 'url',
      align: 'center'
    },
    {
      title: '类型',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '价格',
      key: 'link',
      dataIndex: 'link',
      align: 'center'
    },
    {
      title: '是否显示',
      key: 'isShow',
      dataIndex: 'isShow',
      align: 'center',chuan
    },
    {
      title: '操作',
      key: 'key',
      align: 'center',
      render: (item: SchemeObj) => (
        <>
          <Button type="primary" size="small" onClick={() => { edit(item) }}>编辑</Button>
          <Popconfirm
            title="确定删除该轮播图?"
            onConfirm={() => del(item)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="default" danger className={'m-l10'} size="small">删除</Button>
          </Popconfirm>
        </>
      )
    }
  ];
  return (
    <div>
      <Table rowKey="_id" columns={columns as any} dataSource={carouselInfo} className={'m-t10'}
        pagination={false} />
      <div className={'f-j-e'}>
        <Pagination
          showSizeChanger
          current={props.current}
          total={carouselInfo && total}
          className={'m-t20'}
          onChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Schemes
