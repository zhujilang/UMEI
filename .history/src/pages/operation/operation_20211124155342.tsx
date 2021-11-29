import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Operations from '@/components/Operation/Operation';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Operation = () => {
  const data=[{
    mobile:12313124,
    username:'张三',
    userRole:'管理员',
    time:'2021-11-11 12:12:11',
    ipaddress:"61.150.43.54",
    key:1,
    content:'创建新的装修方案“清新海盐印尼风”',
  },
  {
    orderNo:12313124,
    username:'李四',
    status:0,
    time:'2021-11-15 18:19:11',
    ipaddress:"61.150.43.54",
    key:2,
    content:'更新了订单21123123的装修进程',
  },
  {
    orderNo:12313124,
    username:'王五',
    status:1,
    time:'2021-11-11 10:59:11',
    ipaddress:"61.150.43.54",
    key:3,
    content:'与业主Lee发起消息对话',
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
//         type: 'Operation/OperationList',
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
        <h2>操作日志</h2>
        <div className={'scheme-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>操作日志</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
        <Operations  onPageChange={onPageChange} data={data} pageSize={pageSize} pageNum={pageNum} total={total}></Operations>
        </div>
      </div>

    </div>
  )
}

export default Operation
