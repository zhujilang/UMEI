import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Managements from '@/components/management/management';
import Adds from '@/components/m/add';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Management = () => {
  let dispatch = useDispatch()
  let [modalTitle, setModalTitle] = useState('')
  let [status, setStatus] = useState('')
  let [pageNum, setPageNum] = useState(1)
  let [pageSize, setPageSize] = useState(10)
  let [form] = Form.useForm()
  //被编辑的整屋信息
  let [item, setItem] = useState<any>()
  let [url, setUrl] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false);
  let add= () =>{
      setIsModalVisible(true)
  }
  // 获取人员列表
  const getData = (pageNum: number, pageSize: number) => {
    dispatch(
      {
        type: 'Management/getadminlist',
        payload: {
          pageNum: pageNum,
          pageSize: pageSize,
        }
      }
    )
  }
  useEffect(() => {
    getData(pageNum, pageSize)
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
    pageNum > 0 && getData(pageNum, pageSize)
  }
  return (
    <div className={'management'}>
      <div className={'management-all'}>
        <h2>人员管理</h2>
        <div className={'management-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>人员管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        
        <div className={'management-body'}>
           {isModalVisible?<div >
               <Adds></Adds>
           </div>:<div>
           <div><Button type="primary" onClick={add}>新增管理员</Button></div>
               <Managements edit={edit}  onPageChange={onPageChange}  pageSize={pageSize} pageNum={pageNum}></Managements>
               </div>
           }
        </div>
      </div>

    </div>
  )
}

export default Management
