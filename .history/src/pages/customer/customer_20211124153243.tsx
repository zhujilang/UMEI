import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Customers from '@/components/customer/customer';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Customer = () => {
  const data=[{
    orderNo:12313124,
    username:'张三',
    status:0,
    time:'2021-11-11 12:12:11',
    grade:'好评',
    key:1,
    content:'好看也好用',
    img: "https://umei.tonyliangli.cn/file/umei/zw_pic2@2x.png"
  },
  {
    orderNo:12313124,
    username:'李四',
    status:0,
    time:'2021-11-15 18:19:11',
    grade:'好评',
    key:1,
    content:'好看也好用',
    img: "https://umei.tonyliangli.cn/file/umei/zw_pic2@2x.png"
  },
  {
    orderNo:12313124,
    username:'王五',
    status:0,
    time:'2021-11-11 12:12:11',
    grade:'好评',
    key:1,
    content:'好看也好用',
    img: "https://umei.tonyliangli.cn/file/umei/zw_pic2@2x.png"
  },
]
  const total=3
  let dispatch = useDispatch()
  let [status, setStatus] = useState('')
  let [pageNum, setPageNum] = useState(1)
  let [pageSize, setPageSize] = useState(100)
  let [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 获取评价数据
//   const getData = (pageNum: number, pageSize: number, status: string) => {
//     dispatch(
//       {
//         type: 'Customer/CustomerList',
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
    <div className={'scheme'}>
      <div className={'scheme-all'}>
        <h2>评价管理</h2>
        <div className={'scheme-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>评价管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
        <Customers  onPageChange={onPageChange} data={data} pageSize={pageSize} pageNum={pageNum} total={total}></Customers>
        </div>
      </div>

    </div>
  )
}

export default Customer
