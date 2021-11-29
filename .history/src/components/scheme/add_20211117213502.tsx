import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select,} from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined,LoadingOutlined, PlusOutlined  } from '@ant-design/icons'
import '../../pages/index'
import Upload from '..'
import { valueToNode } from '@babel/types'


const { Option } = Select;
const { TextArea } = Input;
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
  let [sgs, setSgs] = useState<number>(0)
  //   生命周期
  let getbaseData = () => {
    dispatch({
      type: 'Scheme/getbaseData',
      payload: {
        id: 0
      }
    })
    console.log();

  }
  useEffect(() => {
    getbaseData()
  }, [])
  return (
    <div >
      <div className={'add'}>
        <Form

          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {/* 装修方案基本信息 */}
          <div>
            <div className={'scheme-detail'}>
              <div className={'box'}></div>
              <div className={'scheme-detail-head'}>装修方案基本信息</div>
            </div>
            <div></div>
          </div>
          <div className={'check'}>
            <div className={'important'}>*</div>
            <div>选择社区架构和户型</div>
          </div>
          <Form.Item

          >
            <div className={'check-city'}>
              <div className={'check-city-check'}>
                省份
                <Select style={{ width: 100 }}>
                </Select></div>
              <div className={'check-city-check'}>
                城市
                <Select style={{ width: 100 }} disabled={sgs == 0 ? true : false} allowClear={true}>
                </Select>
              </div>
              <div className={'check-city-check'}>
                项目
                <Select style={{ width: 100 }}>
                </Select>
              </div>
              <div className={'check-city-check'}>
                分期
                <Select style={{ width: 100 }}>
                </Select>
              </div>
              <div className={'check-city-check'}>
                楼号
                <Select style={{ width: 100 }}>
                </Select>
              </div>
              <div>
                户型
                <Select style={{ width: 100 }}>
                </Select>
              </div>
            </div>
          </Form.Item>

          <Form.Item  >
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>类型</div>
            </div>
            <Select style={{ width: 100 }}>
            </Select>
          </Form.Item>

          <Form.Item  >
            <div className={'check'}>
              <div className={'check-choose'}>
                <div className={'check'}><div className={'important'}>*</div>
                  <div>用途</div></div>
                <Select style={{ width: 100 }}>
                </Select></div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>风格</div></div>
                <Select style={{ width: 100 }}>
                </Select></div>
            </div>

          </Form.Item>

          <Form.Item  >
            <div className={'check'}>
              <div className={'check-choose'}>
                <div className={'check'}><div className={'important'}>*</div>
                  <div>上传合同文件:</div></div>
                <div className={''}>
                  <label>选择文件</label>
                  <div contentEditable={false}>未选中任何文件</div>
                </div>
              </div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>设置尾款付款节点:</div></div>
                <Select style={{ width: 100 }}>
                </Select></div>
            </div>

          </Form.Item>
          <div className={'scheme-detail'}>
            <div className={'box'}></div>
            <div className={'scheme-detail-head'}>装修方案详情</div>
          </div>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>标题</div>
            </div>
            <Input placeholder="请输入" style={{width:500}}/>
          </Form.Item>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>报价</div>
            </div>
            <Input placeholder="请输入" suffix="元" style={{width:150}}/>
          </Form.Item>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>设计概念</div>
            </div>
            <TextArea rows={8} />
          </Form.Item>
          <Form.Item  >
            <div className={'check'}>
              <div className={'check-choose'}>
                <div className={'check'}><div className={'important'}>*</div>
                  <div>设计师姓名</div></div>
                  <Input placeholder="请输入"  style={{width:100}}/></div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>设计师头像</div></div>

                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'}></Upload>
                </div>
            </div>

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
