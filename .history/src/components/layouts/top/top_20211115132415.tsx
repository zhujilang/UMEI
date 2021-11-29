import React, { useState } from 'react'
import {  } from '@ant-design/icons';
import { Layout, Menu, Modal } from 'antd';
import { useHistory } from 'react-router-dom'
import brand from '../../../assets/brand.';

interface Props {
    collapsed: boolean,
    toggle: () => void,
    user: any
}
const Top = (props: Props) => {
    let history = useHistory()
    const { confirm } = Modal;
    //点击退出登录
    const goto = () => {
        confirm({
            title: '提示',
            content: '确认退出本次登录?',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                localStorage.removeItem('token')
                localStorage.removeItem('userInfo')
                history.push('/login')
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }
    return (
        <div className={'layouts-top'}>
            <div >
                <div className={'brand'}>
                    <div><img src={brand} alt=""  className={'img'}/></div>
                    <div><h1>美生活</h1></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Top
