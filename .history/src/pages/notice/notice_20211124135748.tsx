import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Notices from '@/components/notice/notice';
import Adds from '@/components/scheme/add';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Scheme = () => {
  let dispatch = useDispatch()
  let [modalTitle, setModalTitle] = useState('')
  let [status, setStatus] = useState('')
  let [pageNum, setPageNum] = useState(1)
  let [pageSize, setPageSize] = useState(100)
  let [form] = Form.useForm()
  //被编辑的整屋信息
  let [item, setItem] = useState<any>()
  let [url, setUrl] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false);
  // 获取整屋数据
  const getData = (pageNum: number, pageSize: number, status: string) => {
    dispatch(
      {
        type: 'Scheme/SchemeList',
        payload: {
          pageNum: pageNum,
          pageSize: pageSize,
          status: status
        }
      }
    )
  }
  useEffect(() => {
    getData(pageNum, pageSize, status)
  }, [])
  //对话框点击确认
  const handleOk = () => {
    form.submit()
  };
   //对话框点击取消
   const handleCancel = () => {
    setIsModalVisible(false);
  };
  //编辑方案
  const edit = (data: any) => {
    form.setFieldsValue({ url: data.url })
    setItem(data)
    setUrl(data.url)
    setModalTitle('编辑方案')
    setIsModalVisible(true)
  }
  //切换页码
  const onPageChange = (pageNum: number, pageSize: number) => {
    setPageNum(pageNum)
    setPageSize(pageSize)
    pageNum > 0 && getData(pageNum, pageSize, status)
  }
  return (
    <div className={'scheme'}>
      <div className={'scheme-all'}>
        <h2>通知管理</h2>
        <div className={'scheme-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>通知管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
        <Notices edit={edit} onPageChange={onPageChange} data={data} pageSize={pageSize} pageNum={pageNum} pageNtotalum={pageNum}></Notices>
        </div>
      </div>

    </div>
  )
}

export default Scheme
