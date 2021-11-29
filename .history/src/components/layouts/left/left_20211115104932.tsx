import { Menu } from 'antd';
import { NavArray } from '@/types'
import { Link, useHistory } from 'umi'
import { useState } from 'react';

const Left = () => {
  let [selectedKeys, setSelectedKeys] = useState(['/'])
  let history = useHistory()
  let [pro, setPro] = useState(['/add', '/class', '/parameter', '/spec', '/model', '/product', '/specparams'])
  const { SubMenu } = Menu;
  return (
    <div>
      <Menu
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={pro.includes(history.location.pathname) ? ['proSub'] : []}
        mode="inline"
        theme="dark"
        selectedKeys={[history.location.pathname]}
      >
        {
          NavArray.map((item: any) => {
            return (
              item.children ?
                <SubMenu key="proSub"  icon={< item.icon />}>
                </SubMenu> :
                
            
          })
        }
      </Menu>
    </div>
  )
}
export default Left

