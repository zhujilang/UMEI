import React from 'react'
import { Button, Form } from 'antd';
import { useState, useEffect } from 'react'
import Informations from '@/components/information/information';
import Adds from '@/components/information/add';
import { useDispatch } from '_umi@3.5.20@umi';
import { PlusOutlined } from '@ant-design/icons';
const Information = () => {
  let dispatch = useDispatch()
  let [modalTitle, setModalTitle] = useState('')
  let [status, setStatus] = useState(0)
  let [pageNum, setPageNum] = useState(1)
  let [pageSize, setPageSize] = useState(10)
  let [keyword, setKeyword] = useState('')

  let [form] = Form.useForm()


  const [isModalVisible, setIsModalVisible] = useState(false);
  // 获取时尚资讯列表
  const getData = (pageNum: number, pageSize: number, status: number,keyword:string) => {
    dispatch(
      {
        type: 'Information/getfashionlist',
        payload: {
          pageNum: pageNum,
          pageSize: pageSize,
          status: status,
          keyword:keyword
        }
      }
    )
  }
  useEffect(() => {
    getData(pageNum, pageSize, status,keyword)
  }, [])
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
    pageNum > 0 && getData(pageNum, pageSize, status,keyword)
  }
  return (
    <div className={'scheme'}>
      <div className={'scheme-all'}>
        <h2>时尚资讯管理</h2>
        <div className={'scheme-header'}>
          <div className={'interval'}>首页</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div className={'interval'}>时尚资讯管理</div>
          <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
          <div>列表</div>
        </div>
        <div>
          {isModalVisible?<Adds isModalVisible={isModalVisible} item={ item: any}></Adds>:
          <>
          <div className={'scheme-state'}>
          <div className={'sta'}>
            <div className={'sf'}>状态：</div>
            <div className={'sfr'}>全部(10)</div>
            <div className={'sr'}>已发布(2)</div>
            <div className={'sr'}>审核中(3)</div>
            <div className={'sr'}>已失效(4)</div>
            <div className={'sr'}>审核未通过(1)</div>
          </div>
          <div>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => {
              setIsModalVisible(true)
            }}>
              创建新的时尚资讯
            </Button>
          </div>
        </div>
          <Informations onPageChange={onPageChange} status={status} pageSize={pageSize} pageNum={pageNum} keyword={keyword} ></Informations>
          </> 
        }
        </div>
      </div>

    </div>
  )
}

export default Information
