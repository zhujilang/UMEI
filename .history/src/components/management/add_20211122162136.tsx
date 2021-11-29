import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select, Card, Modal, Divider, Space } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../../pages/index'
import Upload from '../upload/upload'
import { valueToNode } from '@babel/types'
import { AddObj } from '@/types'
import MinusCircleOutlined from '@ant-design/icons/lib/icons/MinusCircleOutlined'
import CloseCircleFilled from '@ant-design/icons/lib/icons/CloseCircleFilled'

interface Props {
    isModalVisible: boolean,

}

const Add = (props: Props) => {
    let dispatch = useDispatch()
    let [form] = Form.useForm()
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [isEmplower, setIsEmplower] = useState<number>(1);
    let changeto=() => {
        setIsEmplower(0)
    }
    let changefor=() => {
        setIsEmplower(1)
    }

    return (
        <div >
            <div className={'add-management'}>
                <Form>
                    <div className={'title'}>编辑资料信息</div>
                    <div className={'basic'}>管理员基础信息</div>
                    <div>
                        <div>
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <Input />
                            </Form.Item></div>
                        <div>
                            <Form.Item
                                label="管理员角色"
                                name="adminRole"
                                rules={[{ required: true, message: '请输入管理员角色' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div>
                        <div><Form.Item
                            label="管理员角色"
                            name="password"
                            rules={[{ required: true, message: '请输入密码' }]}
                        >
                            <Input />
                        </Form.Item></div>
                        <div>
                            <Form.Item
                                label="授权状态"
                                name="isEmplower"
                                rules={[{ required: true, message: '请输入用户名' }]}
                            >
                                <div>
                                    {isEmplower == 1 ? <div >
                                        <div >
                                            <Button>启用</Button></div>
                                        <div><Button type="primary" onClick={changeto}>禁用</Button></div>
                                    </div> : <div className={'isEmplower'}>
                                        <div><Button type="primary" onClick={changefor}>启用</Button></div>
                                        <div><Button>禁用</Button></div>

                                    </div>}
                                </div>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Add

