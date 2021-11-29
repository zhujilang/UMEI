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
                    name="storeName"
                    wrapperCol={{ span: 4 }}
                    labelCol={{ span: 4 }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="商户详细地址"
                    name="address"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item label="商户法定经营范围"
                    name=""
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>
                 
                <Form.Item label="联系人姓名"
                    name="lname"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>

                <Form.Item label="联系人电话"
                    name="mobile"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>

                <Form.Item label="联系邮箱"
                    name="email"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>

                <Form.Item label="商家优势"
                    name="advantage"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>

                <Form.Item label="法人/负责人姓名"
                    name="personname"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>

                <Form.Item label="法人/负责人身份证号"
                    name="idcard"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 4 }}>
                    <Input />
                </Form.Item>
                <div>
                    div*2
                    
                </div>
            </Form>
        </div>
    )
}

export default Sttled
