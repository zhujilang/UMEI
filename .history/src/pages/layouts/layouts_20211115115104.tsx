import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'
import { Layout } from 'antd';
import Left from '@/components/layouts/left/left';
import Top from '@/components/layouts/top/top';

const { Header, Sider, Content } = Layout;
interface Props {
    children: React.ReactNode
}
const Layouts = (props: Props) => {
    let history = useHistory()
    let [user, setUser] = useState(localStorage.getItem('userInfo'))
    useEffect(() => {
        // console.log(user);
        !user ? history.push('/login') : null
    }, [])
    let [collapsed, setCollapsed] = useState<boolean>(false)
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>

            <Layout>
                <Header className={''}><Top collapsed={collapsed} toggle={toggle} user={JSON.parse(user!)} ></Top></Header>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <Left></Left>
                    </Sider>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 2,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>

            </Layout>
        </div>
    )
}
export default Layouts