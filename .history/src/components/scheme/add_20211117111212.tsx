import { useState, useEffect } from 'react'
import { Form, Tabs, Button, message } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined } from '@ant-design/icons'
const { TabPane } = Tabs;
import '../../pages/index'

interface Props {
  isModalVisible: boolean,  
}
const Add = (props: Props) => {
  let dispatch = useDispatch()
  let [form] = Form.useForm()
  //被编辑的方案信息
  let [item, setItem] = useState<any>()
  //未验证通过的表单数量
  let [checkNum, setCheckNum] = useState(3)
//   生命周期
  useEffect(() => {
    
  }, [])
  return (
    <div >
        <div className={'add'}>
            fo
        </div>
    </div>
  )
}
export default Add
