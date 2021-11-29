import { useState, useEffect } from 'react'
import { Form, Button, Input, Divider } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../../pages/index'
import { valueToNode } from '@babel/types'
import { BrandObj } from '@/types'
import MinusCircleOutlined from '@ant-design/icons/lib/icons/MinusCircleOutlined'
import Uploads from '../uploads/uploads'

interface Props {
    isModalVisible: boolean,
    handleCancel: () => void,
    item: any
}
const { TextArea } = Input;

const Brands = (props: Props) => {
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
        props.handleCancel()
    }
    let onFinishFailed = () => {
        setIsModalVisible(true)
        props.handleCancel()
        form.resetFields()
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
                <Form>
                    <div className={'brand'}>
                        <div className={'brand-style'}>
                            <div className={'title'}>店铺基本信息</div>
                            <Divider />
                            <Form.Item label="店铺名称" name="storeName" rules={[{ required: true, message: '请输入店铺名称' }]}

                                wrapperCol={{ span: 4 }}
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                            <Form.Item label="服务热线" name="telephone" rules={[{ required: true, message: '请输入服务热线' }]}
                                wrapperCol={{ span: 4 }}
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                            <Form.Item label="地址" name="address" rules={[{ required: true, message: '请输入地址' }]}
                                wrapperCol={{ span: 8 }}
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                            <div className={'title'}>店铺详细信息</div>
                            <Divider />
                            <div className={'add-banner'}>
                                <div className={'banner'}>*</div>
                                <div>上传品牌馆入口展示图：</div>
                            </div>
                            <Form.Item name="storeImg" rules={[{ required: true, message: '请输入地址' }]}
                                wrapperCol={{ span: 8 }}
                            >
                                <Uploads onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Uploads>
                            </Form.Item>
                            <div className={'add-banner'}>
                                <div className={'banner'}>*</div>
                                <div>上传店铺照片(作为顶部banner轮播图)：</div>
                            </div>
                            <Form.Item name="imgList" rules={[{ required: true, message: '请输入地址' }]}
                                wrapperCol={{ span: 8 }}
                            >
                                <Uploads onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={6}></Uploads>
                            </Form.Item>
                            <div className={'add-banner'}>
                                <div className={'banner'}>*</div>
                                <div>店铺详情：</div>
                            </div>
                            <Form.Item name="introduce" rules={[{ required: true, message: '请输入地址' }]}
                                wrapperCol={{ span: 8 }}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>
                    </div>
                    <div className={'brands'}>
                        <div className={'brands-btn'}>
                            <div><Button onClick={onFinishFailed}>取消</Button></div>
                            <div className={'btns'}>
                                <Button type="primary" onClick={onFinish}>确认</Button>

                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default Brands

