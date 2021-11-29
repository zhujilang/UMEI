import React from 'react'
import { Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react'
import { useDispatch } from '_umi@3.5.20@umi';
import { SearchOutlined } from '@ant-design/icons';
import '../index.less'
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
                <h2>订单管理</h2>
                <div className={'scheme-header'}>
                    <div className={'interval'}>首页</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div className={'interval'}>订单管理</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div>列表</div>
                </div>
                <div>
                    <div className={'scheme-state'}>
                        <div className={'sta'}>
                            <div className={'sf'}>状态：</div>
                            <div className={'sfr'}>全部(10)</div>
                            <div className={'sr'}>新订单(2)</div>
                            <div className={'sr'}>进行中(3)</div>
                            <div className={'sr'}>已完成(4)</div>
                            <div className={'sr'}>已终止服务(4)</div>
                            <div className={'sr'}>售后服务中(1)</div>
                        </div>
                    </div>
                    <div className={'search'}>
                        <div >
                            <Input
                                placeholder="搜索"
                                prefix={<SearchOutlined />}
                                className={'search-style'}
                            />
                        </div>
                        <div>取消</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Order
