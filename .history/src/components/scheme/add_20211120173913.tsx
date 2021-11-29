import { useState, useEffect } from 'react'
import { Form, Button, message, Input, Select, Card, Modal, Divider } from 'antd'
import { useDispatch, useSelector } from 'umi'
import { CloseOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../../pages/index'
import Upload from '../upload/upload'
import { valueToNode } from '@babel/types'
import { AddObj } from '@/types'


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
  value: any
}
const Add = (props: Props) => {
  const [schemes, setSchemes] = useState([{ title: "", basic: [], slider: [], description: "" }, { title: "", basic: [], slider: [], description: "" }]);
  let addInfo = useSelector((state: any) => state.Add.addInfo)
  let typeInfo = useSelector((state: any) => state.Add.typeInfo)
  let purposeInfo = useSelector((state: any) => state.Add.purposeInfo)
  let styleInfo = useSelector((state: any) => state.Add.styleInfo)
  let balanceInfo = useSelector((state: any) => state.Add.balanceInfo)
  let dispatch = useDispatch()
  let [form] = Form.useForm()
  //被编辑的方案信息
  let [item, setItem] = useState<any>(props.item && props.item)
  let [pics, setPics] = useState<any>(0)
  let [fileList, setFileList] = useState<any>([])
  let [quantity, setQuantity] = useState<number>(0)
  let [pic, setPic] = useState<string[]>(props.item ? props.item.pic : [])
  let [isModalVisible, setIsModalVisible] = useState(false);
  let [arr, setArr] = useState<any>({})
  let [arrs, setArrs] = useState<any>([])
  let [url, setUrl] = useState('')
  const onFinish = () => {
    let values: any = form.getFieldsValue()
    console.log(values);
    setArr(values)
    let ar = [...arrs, arr]
    setArrs(ar)
    console.log(arrs);


    form.resetFields()
  }
  let handleOk = () => {
    setIsModalVisible(false);
  };

  let handleCancel = () => {
    setIsModalVisible(false);
  };
  let addpics = () => {
    setPics(1)
    setIsModalVisible(true)
  }
  const del = (index: number) => {
    arrs.splice(index, 1)
    let ar = arrs.splice(index, 1)
    setArrs(ar)

  }
  let getbaseData = () => {
    dispatch({
      type: 'Add/getbaseData',
      payload: {
        parentId: quantity
      }
    })
  }
  // 获取类型数据
  let queryGoodsType = () => {
    dispatch({
      type: 'Add/gettypeData',
    })
  }
  // 获取用途数据
  let getpurposeData = () => {
    dispatch({
      type: 'Add/getpurposeData',
    })
  }
  // 获取风格数据
  let getstyleData = () => {
    dispatch({
      type: 'Add/getstyleData',
    })
  }
  // 获取尾款时间
  let getbalanceData = () => {
    dispatch({
      type: 'Add/getbalanceData',
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
    setUrl(url)
    form.setFieldsValue({ url: url })
  }
  let handleChange = (value: any) => {
    console.log(`selected ${value}`)
  }
  let cancel = () => {
    form.resetFields()
  }
  useEffect(() => {
    getbaseData()
    queryGoodsType()
    getpurposeData()
    getstyleData()
    getbalanceData()
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
            name="purchaseInfo"
          >
            <div className={'check-city'}>
              <div className={'check-city-check'}>
                <Select
                  style={{ width: 100 }}
                  onChange={() => {
                    setQuantity(1)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 1
                      }
                    })
                  }}
                >
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select></div>
              <div className={'check-city-check'}>
                城市
                <Select style={{ width: 100 }} disabled={quantity !== 1 ? true : false}
                  onChange={() => {
                    setQuantity(2)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 2
                      }
                    })
                  }}
                >
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select>
              </div>
              <div className={'check-city-check'}>
                项目
                <Select style={{ width: 100 }} disabled={quantity !== 2 ? true : false}
                  onChange={() => {
                    setQuantity(3)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 3
                      }
                    })
                  }}
                >
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select>
              </div>
              <div className={'check-city-check'}>
                分期
                <Select style={{ width: 100 }} disabled={quantity !== 3 ? true : false}
                  onChange={() => {
                    setQuantity(5)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 5
                      }
                    })
                  }}
                >
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select>
              </div>
              <div className={'check-city-check'}>
                楼号
                <Select style={{ width: 100 }} disabled={quantity !== 5 ? true : false}
                  onChange={() => {
                    setQuantity(7)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 7
                      }
                    })
                  }}
                >
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select>
              </div>
              <div>
                户型
                <Select style={{ width: 100 }} disabled={quantity !== 7 ? true : false}
                  onChange={() => {
                    setQuantity(0)
                    dispatch({
                      type: 'Add/getbaseData',
                      payload: {
                        parentId: 0
                      }
                    })
                  }}>
                  {
                    addInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
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
              {
                typeInfo.map((item: any) => {
                  return (
                    <Option value={item.parentId} key={item.id}>{item.name}</Option>
                  )
                })
              }
            </Select>
          </Form.Item>

          <Form.Item  >
            <div className={'check'}>
              <div className={'check-choose'}>
                <div className={'check'}><div className={'important'}>*</div>
                  <div>用途</div></div>
                <Select style={{ width: 100 }}>
                  {
                    purposeInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select></div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>风格</div></div>
                <Select style={{ width: 100 }}>
                  {
                    styleInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
                </Select></div>
            </div>

          </Form.Item>

          <Form.Item  >
            <div className={'check'}>
              <div className={'check-choose'}>
                <div className={'check'}><div className={'important'}>*</div>
                  <div>上传合同文件:</div></div>
                <div className={''}>
                  <input type="file" />
                </div>
              </div>
              <div >
                <div className={'check'}><div className={'important'}>*</div>
                  <div>设置尾款付款节点:</div></div>
                <Select style={{ width: 100 }}>
                  {
                    balanceInfo.map((item: any) => {
                      return (
                        <Option value={item.parentId} key={item.id}>{item.name}</Option>
                      )
                    })
                  }
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
          {/* 装修方案详情 */}

          <div className={'check'}>
            <div className={'important'}>*</div>
            <div>方案详情</div>
          </div>
          <Form.Item>
            {arrs && arrs.length > 0 ? <div>{
              arrs.map((item: any, index: number) => {
                return (
                  <div >
                    <div className={'card'} onClick={() => {
                      del(index)
                    }}><CloseOutlined /></div>
                    <div className={'card-title'}>
                      <div>标题：</div>
                      <div ><Form.Item name="categoryName">
                        <Input size="small" placeholder={item.categoryName} />
                      </Form.Item></div>
                    </div>
                    <div className={'card-img'}>
                      <div>插入常规图片</div>
                      <div className={'img'}>
                        <Form.Item name="url">
                          <img src={item.url} className={'img'} />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={'card-describe'}>
                      <div>描述：</div>
                      <div><Form.Item name="content">
                        <TextArea
                          value={item.content}
                          placeholder="请输入"
                        />
                      </Form.Item></div>
                    </div>
                    <div>
                      <div>插入可切换的图片</div>
                      <div>
                        <Form.Item name="itemca">

                        </Form.Item>
                      </div>
                    </div>
                  </div>
                )
              })
            }</div> : ''
            }
          </Form.Item>
          <Card style={{ width: 400 }}>
            <Form name="add" onFinish={onFinish} form={form}>
              <div className={'card'} onClick={cancel}><CloseOutlined /></div>
              <div className={'card-title'}>
                <div>标题：</div>
                <div ><Form.Item name="categoryName">
                  <Input size="small" placeholder="请输入" />
                </Form.Item></div>
              </div>
              <div className={'card-img'}>
                <div>插入常规图片</div>
                <div className={'img'}>
                  <Form.Item name="url">
                    <Upload onRemove={onRemove} uploadUrl={uploadUrl} url={url} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                  </Form.Item>
                </div>
              </div>
              <div className={'card-describe'}>
                <div>描述：</div>
                <div><Form.Item name="content">
                  <TextArea
                    placeholder="请输入"
                  />
                </Form.Item></div>
              </div>
              <div>
                <div>插入可切换的图片</div>
                <div>
                  <Form.Item name="itemca">
                    {pics == 0 ? <div className={'pics'} onClick={addpics}>+</div> :
                      <div>

                      </div>
                    }
                  </Form.Item>
                </div>
              </div>
              <div className={'button'}><Button icon={<PlusOutlined />} block onClick={onFinish}>
                添加
              </Button></div>
            </Form>
          </Card>
          {/* 选配包与服务包 */}
          <div>
            <div className={'scheme-detail'}>
              <div className={'box'}></div>
              <div className={'scheme-detail-head'}>选配包与服务包</div>
            </div>
            <div></div>
          </div>
          <div>
            <div className={'optionalpackage-head'}>
              <div>选配包：</div>
              <div className={'optionalpackage'}>(可以任意选择上传哪些选配包,上传的选配包里轮播图和详情页缺—不可)</div>
            </div>
            <div className={'optionalpackage-body'}>
              <div>
                <div>上传墙柜包详情页(只能上传自主制作的一张详情页)∶</div>
                <div className={'mt20'}>
                  <Form.Item>
                    <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                  </Form.Item></div>
              </div>
              <div className={'optionalpackage-body-right'}>
                <div>上传墙柜包轮播图(最多添加3张图片)</div>
                <div className={'mt20'}><Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={3}></Upload>
                </Form.Item></div>
              </div>
            </div>
            <div className={'optionalpackage-body'}>
              <div>
                <div>上传智能包详情页(只能上传自主制作的一张详情页)∶</div>
                <div className={'mt20'}>
                  <Form.Item>
                    <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                  </Form.Item></div>
              </div>
              <div className={'optionalpackage-body-right'}>
                <div>上传智能包轮播图(最多添加3张图片)</div>
                <div className={'mt20'}><Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={3}></Upload>
                </Form.Item></div>
              </div>
            </div>
            <div className={'optionalpackage-body'}>
              <div>
                <div>上传软装包详情页(只能上传自主制作的一张详情页)∶</div>
                <div className={'mt20'}>
                  <Form.Item>
                    <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                  </Form.Item></div>
              </div>
              <div className={'optionalpackage-body-right'}>
                <div>上传软装包轮播图(最多添加3张图片)</div>
                <div className={'mt20'}><Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={3}></Upload>
                </Form.Item></div>
              </div>
            </div>
            <div className={'optionalpackage-body'}>
              <div>
                <div>上传家电包详情页(只能上传自主制作的一张详情页)∶</div>
                <div className={'mt20'}>
                  <Form.Item>
                    <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                  </Form.Item></div>
              </div>
              <div className={'optionalpackage-body-right'}>
                <div>上传家电包轮播图(最多添加3张图片)</div>
                <div className={'mt20'}><Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={3}></Upload>
                </Form.Item></div>
              </div>
            </div>
            <div className={'optionalpackage-head'}>
              <div>服务包：</div>
              <div className={'optionalpackage'}>(可以任意选择上传哪些选配包,上传的选配包里轮播图和详情页缺—不可)</div>
            </div>
            <div className={'servicepackage'}>
              <div>上传贷款详情页(只能上传自主制作的一张详情页)∶</div>
              <div className={'mt20'}>
                <Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                </Form.Item></div>
            </div>
            <div className={'servicepackage'}>
              <div>上传维保详情页(只能上传自主制作的一张详情页)∶</div>
              <div className={'mt20'}>
                <Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                </Form.Item></div>
            </div>
            <div className={'servicepackage'}>
              <div>上传托管详情页(只能上传自主制作的一张详情页)∶</div>
              <div className={'mt20'}>
                <Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                </Form.Item></div>
            </div>
            <div className={'servicepackage'}>
              <div>上传除醛详情页(只能上传自主制作的一张详情页)∶</div>
              <div className={'mt20'}>
                <Form.Item>
                  <Upload onRemove={onRemove} uploadUrl={uploadUrl} fileList={fileList} listType={'picture-card'} maxCount={1}></Upload>
                </Form.Item></div>
            </div>
          </div>












          <div className={'scheme-foo'} ></div>
          <div className={'scheme-foot'}>
            <div ><Button htmlType="submit">
              取消
            </Button>
            </div>
            <div className={'scheme-foot-send'}><Button type="primary" htmlType="submit">
              提交
            </Button></div>
          </div>
          <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} title="插入可切换图片">
            <div>
              <div>
                <div><Button type="primary">
                  +添加类型
                </Button></div>
              </div>
              <div>
                <Form>
                  <div className={'mod'}>
                    <div >单品类型</div>
                    <div className={'mod-solo'}><Input size="small"/></div>
                  </div>
                  <div className={'moda'}>
                    <div>单品风格</div>
                    <div> <Button type="link">
                  +添加类型
                </Button></div>
                  </div>
                </Form>
              </div>
            </div>
          </Modal>
        </Form>


      </div>
    </div>
  )
}
export default Add

