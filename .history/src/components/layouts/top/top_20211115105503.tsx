import React, { useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Menu, Modal } from 'antd';
import { useHistory } from 'react-router-dom'

interface Props {
  collapsed: boolean,
  toggle: () => void,
  user: any
}
const Top = (props: Props) => {
  let history = useHistory()
  //选中的语言
  let [local, setLocal] = useState('中文')
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
  const { Header } = Layout;
  const menu = (
    <Menu onClick={goto}>
      <Menu.Item key="goto">
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div >
      <div className={'layouts'}>
       <div>
           <div>img</div>
           div></div><
       </div>
       <div></div>
      </div>
    </div>
  )
}
export default Top
