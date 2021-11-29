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
    <div className='layouts-left'>
      <Menu
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={pro.includes(history.location.pathname) ? ['proSub'] : []}
        mode="inline"
        theme="light"
        selectedKeys={[history.location.pathname]}
      >
        {
          NavArray.map((item: any) => {
            return (
              
                <Menu.Item key={item.path} icon={< item.icon />} ti>
                  <Link to={item.path} replace>
                    {/* {item.name} */}
                  </Link>
                </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}
export default Left

