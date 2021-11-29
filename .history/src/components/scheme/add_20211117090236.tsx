import { useState, useEffect } from 'react'
import { Form, Tabs, Button, message } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined } from '@ant-design/icons'
const { TabPane } = Tabs;

interface Props {
  isModalVisible: boolean,
  handleCancel: () => void,
  modalTitle: string,
  query: string,
  pageSize: number,
  current: number,
  //被编辑的商品信息
  item: any,
  classifyInfo:any
}
const Add = (props: Props) => {
  let dispatch = useDispatch()
  let [form] = Form.useForm()
  //被编辑的方案信息
  let [item, setItem] = useState<any>(props.item && props.item)
  //未验证通过的表单数量
  let [checkNum, setCheckNum] = useState(3)
//   生命周期
  useEffect(() => {
    
  }, [])
  return (
    <div >
      <div >
        <div >2222</div>
      </div>
      <div >
        <Form
          preserve={false}
          labelCol={{ span: 3 }}
          form={form}
        >

        </Form>
      </div>
    </div>
  )
}
export default Add
