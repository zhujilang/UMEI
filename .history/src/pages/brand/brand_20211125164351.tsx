import React from 'react'
import { Button, Divider, Form, Input } from 'antd';
import { useState, useEffect } from 'react'
import { useDispatch } from '_umi@3.5.20@umi';
import Brands from '../../components/brand/brand'

const Brand = () => {
    let dispatch = useDispatch()
    let [modalTitle, setModalTitle] = useState('')
    let [status, setStatus] = useState(0)
    let [pageNum, setPageNum] = useState(1)
    let [pageSize, setPageSize] = useState(100)
    let [form] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false);
    let [item, setItem] = useState<any>()
    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields()
      };
    // 获取售后数据列表
    const getData = () => {
        // dispatch(
        //     {
        //         type: 'Brand/getBrandlist',
        //         payload: {
        //             pageNum: pageNum,
        //             pageSize: pageSize,
        //             status: status
        //         }
        //     }
        // )
    }
    useEffect(() => {
    }, [])
    return (
        <div className={'scheme'}>
            <div className={'scheme-all'}>
                <h2>品牌管理</h2>
                <div className={'scheme-header'}>
                    <div className={'interval'}>首页</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div className={'interval'}>品牌管理</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div>列表</div>
                </div>
                <div>
                    {isModalVisible ? <div>
                        <Brands isModalVisible={isModalVisible} handleCancel={handleCancel} item={item}></Brands>
                    </div> : <div>
                        <div className={'brand-btn'}>
                            <Button type="primary" onClick={() => {
                                setIsModalVisible(true)
                            }}>添加品牌</Button>
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Brand
