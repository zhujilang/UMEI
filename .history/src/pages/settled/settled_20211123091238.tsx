import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const Sttled = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className={''}>
                    店铺基本信息
                </div>

                <Form.Item
                    label="店铺名称"
                    name="name"
                    wrapperCol={{ span: 4 }}
                    rules={[{ required: true, message: '请输入店铺名称' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="服务热线"
                    name="mobile"
                    
                    wrapperCol={{ span: 4 }}
                    rules={[{ required: true, message: '请输入服务热线' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="地址"
                    name="mobile"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 8 }}
                    rules={[{ required: true, message: '请输入地址' }]}>
                    <Input />
                </Form.Item>

            </Form>
        </div>
    )
}

export default Sttled
