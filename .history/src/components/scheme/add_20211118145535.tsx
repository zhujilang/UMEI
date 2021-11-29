import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select, } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../../pages/index'
import Upload from '../upload/upload'
import { valueToNode } from '@babel/types'


const { Option } = Select;
const { TextArea } = Input;
interface Props {
  isModalVisible: boolean,
  handleCancel: () => void,
  modalTitle: string,
  query: string,
  pageSize: number,
  current: number,
  //被编辑的方案信息
  item: any,
  addInfo:any
}
const Add = (props: Props) => {
  let addInfo = useSelector((state: any) => state.Add.addInfo)
  let dispatch = useDispatch()
  let [form] = Form.useForm()
  //被编辑的方案信息
  let [item, setItem] = useState<any>(props.item && props.item)

  let [fileList, setFileList] = useState<any>([])
  let [parentId, setParentId] = useState<number>(0)
  let [pic, setPic] = useState<string[]>(props.item ? props.item.pic : [])
  let getbaseData = () => {
    dispatch({
      type: 'Add/getbaseData',
      payload: {
        parentId: parentId
      }
    })
  }
  //移除图片 分发事件
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
    form.setFieldsValue({ cover: url })
    form.setFieldsValue({ pic: pic })
  }
  let handleChange=(value:any) =>{
    console.log(`selected ${value}`)
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
                <Select
                    style={{ width: 200 }}
                    allowClear
                  >
                  {
                  </Select></div>
              <div className={'check-city-check'}>
                城市
                <Select style={{ width: 100 }} >
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
            <Input placeholder="请输入" style={{ width: 500 }} />
          </Form.Item>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>报价</div>
            </div>
            <Input placeholder="请输入" suffix="元" style={{ width: 150 }} />
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
                <Input placeholder="请输入" style={{ width: 100 }} /></div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>设计师头像</div></div>
                <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>上传顶部banner轮播图（默认第一张为封面展示图）:</div>
            </div>
            <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={6}></Upload>
          </Form.Item>
          <Form.Item>
            <div className={'check'}>
              <div className={'important'}>*</div>
              <div>方案详情</div>
            </div>

            <div className={'programme-detail'}>
              <div className={'title'}>
                <div className={'title-head'}>
                  <div className={'title-title'}>标题:</div>
                  <div><Input  style={{ width: 100 }} /></div>
                </div>
                <div className={'icon'}><CloseOutlined /></div>
              </div>
              <div className={'banner'}>
                <div>图片</div>
                <div className={'banner-banner'}>
                  下面添加
                </div>
              </div>
              <div className={'describe'}>
                  <div>描述:</div>
                  <div className={'describe-describe'}></div>
              </div>
            </div>
          </Form.Item>














          <div className={'scheme-foot'}>
            <div ><Button htmlType="submit">
              取消
            </Button>
            </div>
            <div className={'scheme-foot-send'}><Button type="primary" htmlType="submit">
              提交
            </Button></div>
          </div>
        </Form>
        {/* 装修方案详情 */}
        {/* 选配包与服务包 */}
      </div>
    </div>
  )
}
export default Add
