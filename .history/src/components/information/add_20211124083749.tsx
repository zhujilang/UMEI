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
import Uploads from '../upload/upload'

interface Props {
    isModalVisible: boolean,
}

const Add = (props: Props) => {
    let dispatch = useDispatch()
    let [form] = Form.useForm()
    let [item, setItem] = useState<any>(props.item && props.item)
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [isEmplower, setIsEmplower] = useState<number>(1);
    let [url, setUrl] = useState('')
    let [pics, setPics] = useState<any>(0)
    let [fileList, setFileList] = useState<any>([])
    let changeto = () => {
        setIsEmplower(0)
    }
    let changefor = () => {
        setIsEmplower(1)
    }
    
    let onFinish=() =>{
    let values: any = form.getFieldsValue()
       console.log(values);
       
    }
    const onRemove = (e: any) => {
        if (props.item && Object.keys(props.item).length) {
          //编辑方案移除图片
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
        <div >
            <div className={'add-mation'}>
                <Form
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 8 }}
                    onFinish={onFinish}
                    form={form}
                >
                <div className={'add-information'}>时尚资讯封面</div>
                <div className={'add-banner'}>
                    <div className={'banner'}>*</div>
                    <div>上传一张顶部banner图(默认为封面展示图)</div>
                    <Form.Item name="headImg">
                         <Uploads onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Uploads>
                    </Form.Item>
                </div>
                </Form>
            </div>
        </div>
    )
}
export default Add

