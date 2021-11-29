import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Card, Modal, Divider, Space, Checkbox, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../../pages/index'
import { valueToNode } from '@babel/types'
import { AddObj } from '@/types'
import MinusCircleOutlined from '@ant-design/icons/lib/icons/MinusCircleOutlined'
import CloseCircleFilled from '@ant-design/icons/lib/icons/CloseCircleFilled'
import Upload from '../uploads/uploads'

interface Props {
    isModalVisible: boolean,
    item: any,
}
const { TextArea } = Input;

const Add = (props: Props) => {
    let dispatch = useDispatch()
    let [form] = Form.useForm()
    let [item, setItem] = useState<any>(props.item && props.item)
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [isEmplower, setIsEmplower] = useState<number>(1);
    let [url, setUrl] = useState('')
    let [pic, setPic] = useState<string[]>(props.item ? props.item.pic : [])
    let [fileList, setFileList] = useState<any>([])
    let onFinish = () => {
        let values: any = form.getFieldsValue()
        console.log(values);
    }
    const onRemove = (e: any) => {
        if (props.item && Object.keys(props.item).length) {
            //编辑资讯移除图片
            pic = pic!.filter((i: string) => {
                return i !== e.url
            })
            fileList = fileList.filter((i: any) => {
                return i.url !== e.url
            })
            setFileList(fileList)
            setPic(pic)
        } else {
            //新增移除图片
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
        <div >
            <div className={'add-mation'}>
                <Form
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 8 }}
                    onFinish={onFinish}
                    form={form}
                >
                    <div>
                        <div className={'add-information'}>时尚资讯封面</div>
                        <div className={'add-banner'}>
                            <div className={'banner'}>*</div>
                            <div>上传一张顶部banner图(默认为封面展示图)</div>

                        </div>
                        <div>
                            <Form.Item name="headImg">
                                <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                            </Form.Item>
                        </div>
                        <div className={'add-informationdetail'}>时尚资讯图文详情</div>
                        <div>
                            <Form.Item name="contentImg">
                                <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item name="contentImg">
                                 <TextArea rows={4}  placeholder="请输入时尚资讯详情"/>
                            </Form.Item>
                        </div>
                        <div className={'add-relevant'}>时尚资讯图文详情</div>
                        <div className={'add-relevant'}>时尚资讯图文详情</div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Add

