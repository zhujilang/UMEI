import React, { useState } from 'react'
import { Form, Input, Button, Divider } from 'antd';
import Uploads from '@/components/uploads/uploads';

const { TextArea } = Input;

const Sttled = (props: { item: { pic?: any; }; }) => {
    const onFinish = () => {
        let values: any = form.getFieldsValue()
        console.log(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    let [form] = Form.useForm()
    let [fileList, setFileList] = useState<any>([])
    let [pic, setPic] = useState<string[]>(props.item ? props.item.pic : [])
    let [url, setUrl] = useState('')
    // 移除图片
    const onRemove = (e: any) => {
        if (props.item && Object.keys(props.item).length) {
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
            <div>
                {}
            </div>
        </div>
    )
}

export default Sttled
