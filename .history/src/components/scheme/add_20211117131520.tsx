import { useState, useEffect } from 'react'
import { Form, Tabs, Button, message, Input, Select, } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined } from '@ant-design/icons'
const { Option } = Select;
import '../../pages/index'

interface Props {
  isModalVisible: boolean,
}
const Add = (props: Props) => {
  const fieldNames={}
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {/* 装修方案基本信息 */}
          <div>
            <div className={'scheme-detail'}>
              <div className={'box'}></div>
              <div className={'scheme-detail-head'}>装修方案详情</div>
            </div>
            <div></div>
          </div>
          <div>
            <div className={'im'}>*</div>
            <div>选择社区架构和户型</div>
          </div>
          <Form.Item
            name="c"
          > 
            
            <Select style={{ width: 100 }} >

            </Select>
            <Select style={{ width: 120 }}  >

            </Select>
            <Select style={{ width: 120 }}  >

            </Select>
            <Select style={{ width: 120 }}  >

            </Select>
            <Select style={{ width: 120 }}  >

            </Select>
            <Select style={{ width: 120 }}  >

            </Select>
          </Form.Item>

          <Form.Item
            name="password"
          >
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div className={'scheme-foot'}>
              <div ><Button htmlType="submit">
                取消
              </Button>
              </div>
              <div className={'scheme-foot-send'}><Button type="primary" htmlType="submit">
                提交
              </Button></div>
            </div>
          </Form.Item>
        </Form>
        {/* 装修方案详情 */}
        {/* 选配包与服务包 */}
      </div>
    </div>
  )
}
export default Add
