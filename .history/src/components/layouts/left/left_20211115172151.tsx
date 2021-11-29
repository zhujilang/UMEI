import { Menu } from 'antd';
import { NavArray } from '@/types'
import { Link, useHistory} from 'umi'
import { useState } from 'react';

const Left = () => {
  let [selectedKeys, setSelectedKeys] = useState(['/'])
  let history = useHistory()
  let [pro, setPro] = useState(['/add', '/class', '/parameter', '/spec', '/model', '/product', '/specparams'])
  const { SubMenu } = Menu;
  const intl = useIntl();
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
              item.children ?
                <SubMenu key="proSub"  icon={< item.icon />} title={intl.formatMessage({
                    id: item.t
                  })}>
                </SubMenu> :
                <Menu.Item key={item.path} icon={< item.icon />}>
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

