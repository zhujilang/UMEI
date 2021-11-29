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
  handleCancel: () => void,
  modalTitle: string,
  query: string,
  pageSize: number,
  current: number,
  //被编辑的方案信息
  item: any,
}

const Add = (props: Props) => {
  let dispatch = useDispatch()
  let [form] = Form.useForm()
  let [item, setItem] = useState<any>(props.item && props.item)
  let [pics, setPics] = useState<any>(0)
  let [fileList, setFileList] = useState<any>([])
  let [quantity, setQuantity] = useState<number>(0)
  let [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {

  }, [])
  return (
    <div >
      <div className={'add-management'}>
        <Form>
            DIV
        </Form>
      </div>
    </div>
  )
}
export default Add

