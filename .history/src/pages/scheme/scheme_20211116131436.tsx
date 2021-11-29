import React from 'react'
import { Button,Form } from 'antd';
import { useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import Schemes from '@/components/scheme/scheme';
import { useDispatch } from '_umi@3.5.20@umi';
const Scheme = () => {
    let dispatch = useDispatch()
  let [modalTitle, setModalTitle] = useState('')
  let [status, setStatus] = useState('')
  let [current, setCurrent] = useState(1)
  let [pageSize, setPageSize] = useState(10)
  let [form] = Form.useForm()
  //被编辑的轮播图信息
  let [item, setItem] = useState<any>()
  let [url, setUrl] = useState('')
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  获取
  const getData = (page: number, pSize: number, queryVal: string) => {
    dispatch(
      {
        type: 'Carousel/CarouselList',
        payload: {
          current: page,
          pageSize: pSize,
          query: queryVal
        }
      }
    )
  }
  useEffect(() => {
    getData(current, pageSize, status)
  }, [])
  //对话框点击确认
  const handleOk = () => {
    form.submit()
  };
  const onFinish = () => {
    let values: any = form.getFieldsValue()
    item._id ? values.id = item._id : null
    let type = 'Carousel/AddCarousel'
    values.id ? type = 'Carousel/EditCarouse' : null
    values.query=query
    values.current=current
    values.pageSize=pageSize
    dispatch({
      type: type,
      payload: values
    })
    handleCancel()
  };
  //对话框点击取消
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //子组件分发上传图片的路径
  const uploadUrl = (url: string) => {
    setUrl(url)
    form.setFieldsValue({ url: url })
  }
  //点击搜索按钮
  const onSearch = (val: any) => {
    setQuery(val)
    setCurrent(1)
    getData(1, pageSize, val)
  }
  //编辑轮播图
  const edit = (data: any) => {
    form.setFieldsValue({ url: data.url })
    setItem(data)
    setUrl(data.url)
    setModalTitle('编辑轮播图')
    setIsModalVisible(true)
  }
  //切换页码
  const onPageChange = (page: number, pageSize: number) => {
    setCurrent(page)
    setPageSize(pageSize)
    page > 0 && getData(page, pageSize, query)
  }
    return (
        <div className={'scheme'}>
            <div className={'scheme-all'}>
                <h2>装修方案</h2>
                <div className={'scheme-header'}>
                    <div className={'interval'}>首页</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div className={'interval'}>装修方案</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div>列表</div>
                </div>
                <div className={'scheme-state'}>
                    <div className={'sta'}>
                        <div className={'sf'}>状态：</div>
                        <div className={'sfr'}>全部(10)</div>
                        <div className={'sr'}>上架(2)</div>
                        <div className={'sr'}>审核中(3)</div>
                        <div className={'sr'}>已下架(4)</div>
                        <div className={'sr'}>审核未通过(1)</div>
                    </div>
                    <div>
                        <Button type="primary" icon={<PlusOutlined />}>
                            创建新的装修方案
                        </Button>
                    </div>
                </div>
                <div>
                <Schemes edit={edit} onPageChange={onPageChange} query={query} pageSize={pageSize} current={current}></Schemes>
                </div>
            </div>

        </div>
    )
}

export default Scheme
