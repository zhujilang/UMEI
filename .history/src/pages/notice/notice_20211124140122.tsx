import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Notices from '@/components/notice/notice';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Notice = () => {
  let dispatch = useDispatch()
  let [status, setStatus] = useState('')
  let [pageNum, setPageNum] = useState(1)
  let [pageSize, setPageSize] = useState(100)
  let [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 获取通知数据
//   const getData = (pageNum: number, pageSize: number, status: string) => {
//     dispatch(
//       {
//         type: 'Notice/NoticeList',
//         payload: {
//           pageNum: pageNum,
//           pageSize: pageSize,
//           status: status
//         }
//       }
//     )
//   }
//   useEffect(() => {
//     getData(pageNum, pageSize, status)
//   }, [])
  //对话框点击确认
  const handleOk = () => {
    form.submit()
  };
   //对话框点击取消
   const handleCancel = () => {
    setIsModalVisible(false);
  };
  //切换页码
  const onPageChange = (pageNum: number, pageSize: number) => {
    setPageNum(pageNum)
    setPageSize(pageSize)
    // pageNum > 0 && getData(pageNum, pageSize, status)
  }
  return (
    <div className={'Notice'}>
      <div className={'Notice-all'}>
        <h2>通知管理</h2>
        <div className={'Notice-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>通知管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
        <Notices  onPageChange={onPageChange} data={data} pageSize={pageSize} pageNum={pageNum} total={total}></Notices>
        </div>
      </div>

    </div>
  )
}

export default Notice
