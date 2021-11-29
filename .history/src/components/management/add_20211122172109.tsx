import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select, Card, Modal, Divider, Space, Checkbox, Row, Col } from 'antd'
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
    let changeto = () => {
        setIsEmplower(0)
    }
    let changefor = () => {
        setIsEmplower(1)
    }

    return (
        <div >
            <div className={'add-management'}>
                <Form
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 8 }}
                >
                    <div className={'title'}>编辑资料信息</div>
                    <div className={'basic'}>管理员基础信息</div>
                    <div className={'top-isEmplower'}>
                        <div >
                            <Form.Item
                                label="用户名"
                                name="username"
                                labelCol={{ span: 11 }}
                                wrapperCol={{ span: 12 }}
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
                    <div className={'isEmplower'}>
                        <div><Form.Item
                            label="密码"
                            name="password"
                            labelCol={{ span: 12 }}
                            wrapperCol={{ span: 12 }}
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
                                    {isEmplower == 1 ? <div className={'isEmplower'}>
                                        <div className={'isEmplower-on'}>
                                            <Button>启用</Button></div>
                                        <div><Button type="primary" onClick={changeto}>禁用</Button></div>
                                    </div> : <div className={'isEmplower'}>
                                        <div className={'isEmplower-off'}><Button type="primary" onClick={changefor}>启用</Button></div>
                                        <div><Button>禁用</Button></div>

                                    </div>}
                                </div>
                            </Form.Item>
                        </div>

                    </div>
                    <Form.Item
                        label="员工姓名"
                        name="nickname"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 2 }}
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="员工电话"
                        name="mobile"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 2 }}
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className={'title'}>用户权限设置</div>
                    <Form.Item name="au">
                        <Checkbox.Group>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="1" style={{ lineHeight: '32px' }}>
                                        用户管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="2" style={{ lineHeight: '32px' }}>
                                        家居单品管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="3" style={{ lineHeight: '32px' }}>
                                        活动管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="4" style={{ lineHeight: '32px' }}>
                                        社区架构管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="5" style={{ lineHeight: '32px' }}>
                                        小程序设置
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="6" style={{ lineHeight: '32px' }}>
                                        时尚资讯管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="7" style={{ lineHeight: '32px' }}>
                                        财务管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="8" style={{ lineHeight: '32px' }}>
                                        装修方案管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="9" style={{ lineHeight: '32px' }}>
                                        管理员架构
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="10" style={{ lineHeight: '32px' }}>
                                        订单查看
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="11" style={{ lineHeight: '32px' }}>
                                        商家管理
                                    </Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="12" style={{ lineHeight: '32px' }}>
                                        售后管理
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <div className={''}>
                        <div className={''}>
                            <div><Button type="primary">quren</Button></div>
                            <div><Button>禁用</Button></div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Add

