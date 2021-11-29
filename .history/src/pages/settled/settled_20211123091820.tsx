import React from 'react'
import { Form, Input, Button,Divider } from 'antd';

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
                <div className={'basic-information'}>
                    商家基本信息
                </div>
                <Divider />
                <Form.Item
                    label="商户主体名称"
                    name="name"
                    wrapperCol={{ span: 4 }}
                   
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="商户详细地址"
                    name="address"
                    
                    wrapperCol={{ span: 4 }}
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item label="商户fading"
                    name="mobile"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 8 }}>
                    <Input />
                </Form.Item>

            </Form>
        </div>
    )
}

export default Sttled
