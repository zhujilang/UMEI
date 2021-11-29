import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd';
import Uploads from '@/components/uploads/uploads';

const { TextArea } = Input;

const Sttled = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    let [form] = Form.useForm()
    let [fileList, setFileList] = useState<any>([])
    let [pic, setPic] = useState<string[]>(item ? item.pic : [])
    let [url, setUrl] = useState('')
    // 移除图片
    const onRemove = (e: any) => {
        if (item && Object.keys(props.item).length) {
          pic = pic!.filter((i: string) => {
            return i !== e.url
          })
          fileList = fileList.filter((i: any) => {
            return i.url !== e.url
          })
          setFileList(fileList)
          setPic(pic)
        } else {
          //新增新增移除图片
          pic = pic!.filter((i: string) => {
            return i !== e.response.data
          })
          fileList = fileList.filter((i: any) => {
            return i.url !== e.response.data
          })
          setPic(pic)
          setFileList(fileList)
        }
        form.setFieldsValue({ pic: pic })
      }
      //子组件分发上传图片的路径
      const uploadUrl = (url: string) => {
        setUrl(url)
        form.setFieldsValue({ url: url })
      }
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
                    <TextArea />
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
                    <div>
                        <Form.Item label="身份证正面"
                            name="card"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 4 }}>
                            <Uploads onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Uploads>
                        </Form.Item>
                    </div>
                    <div><Form.Item label="身份证反面"
                            name="card"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 4 }}>
                            <Uploads onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Uploads>
                        </Form.Item></div>
                </div>
            </Form>
        </div>
    )
}

export default Sttled
