import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select, Card, Modal, Divider, Space } from 'antd'
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
  return (
    <div >
      <div className={'add-management'}>
        <Form>
            <div className={''}>编辑资料信息</div>
        </Form>
      </div>
    </div>
  )
}
export default Add

