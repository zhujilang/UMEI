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
    let onFinish=() =>{
    let values: any = form.getFieldsValue()
       console.log(values);
       
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
                
                </Form>
            </div>
        </div>
    )
}
export default Add

