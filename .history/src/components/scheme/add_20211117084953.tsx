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
  //被编辑的产品信息
  let [item, setItem] = useState<any>(props.item && props.item)
  //商品主图
  let [cover, setcover] = useState('')
  let [fileList, setFileList] = useState<any>([])
  //商品详情图
  let [pic, setPic] = useState<string[]>(props.item ? props.item.pic : [])
  // tab选中的下标
  let [key, setKey] = useState(1)
  //未验证通过的表单数量
  let [checkNum, setCheckNum] = useState(3)
  useEffect(() => {
    if (props.item) {
      setPic(props.item.pic)
      props.item.pic && props.item.pic.map((i: string) => {
        fileList.push({ url: i })
      })
      setFileList(fileList)
    }
  }, [])
  const setModelId = (val: string) => {
    form.setFieldsValue({ model: val })
  }
 
  //表单验证失败
  const onFinishFailed = (e: any) => {
    if (e.errorFields[0].name[0] === 'pic') setKey(2)
    else if (e.errorFields[0].name[0] === 'model')
      setKey(3)
    else if (e.errorFields[0].name[0] === 'detail')
      setKey(4)
  }
  return (
    <div className={'bc-w'}>
      <div className={'f-j-b p-10'}>
        <div className={'f-s16'}>添加商品</div>
        <CloseOutlined onClick={close} />
      </div>
      <div className={'p-10'}>
        <Form
          preserve={false}
          labelCol={{ span: 3 }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Tabs activeKey={key + ''} onChange={callback}>
            <TabPane tab="基本设置" key="1">
              <Basic classifyInfo={props.classifyInfo} uploadUrl={uploadUrl} item={props.item}></Basic>
            </TabPane>
            <TabPane tab="媒体信息" key="2" disabled={checkNum === 3}>
              <Form.Item
                label="商品图片"
                name='pic'
                initialValue={props.item.pic}
                rules={[{ required: true, message: '请上传商品图片' }]}
              >
                <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'}></Upload>
              </Form.Item>
            </TabPane>
            <TabPane tab="商品规格" key="3" disabled={checkNum >= 2}>
              <Addspec setModelId={setModelId} setSpec={setSpec} item={props.item}></Addspec>
            </TabPane>
            <TabPane tab="商品详情" key="4" disabled={checkNum >= 1}>
              <Editor setDetail={setDetail} item={props.item}></Editor>
            </TabPane>
          </Tabs>
          <div className={'b-b'} style={{ height: 1, width: '102%', marginLeft: -10 }}></div>
          <Form.Item className={'p-l10 m-t10'}>
            <Button onClick={close} size="small">取消</Button>
            <Button htmlType="submit" type="primary" className={'m-l10'} size="small">确认</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Add
