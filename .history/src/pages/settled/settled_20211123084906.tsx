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

                <Form.Item
                    label="店铺名称"
                    name="name"
                    wrapperCol={{ span: 4 }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="服务热线"
                    name="mobile"
                    wrapperCol={{ span: 4 }}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="remember" >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Sttled
