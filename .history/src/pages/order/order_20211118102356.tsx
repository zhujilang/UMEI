import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Schemes from '@/components/scheme/scheme';
import Adds from '@/components/scheme/add';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Order = () => {
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
  // 获取订单数据
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
  //切换页码
  const onPageChange = (pageNum: number, pageSize: number) => {
    setPageNum(pageNum)
    setPageSize(pageSize)
    pageNum > 0 && getData(pageNum, pageSize, status)
  }
  return (
    <div className={'scheme'}>
      <div className={'scheme-all'}>
        <h2>装修方案</h2>
        <div className={'scheme-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>订单管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
          
          <>
          <div className={'scheme-state'}>
          <div className={'sta'}>
            <div className={'sf'}>状态：</div>
            <div className={'sfr'}>全部(10)</div>
            <div className={'sr'}>新订单(2)</div>
            <div className={'sr'}>进行中(3)</div>
            <div className={'sr'}>yi(4)</div>
            <div className={'sr'}>审核未通过(1)</div>
          </div>
          <div>
          </div>
        </div>
          
          </> 
        </div>
      </div>

    </div>
  )
}

export default Order
