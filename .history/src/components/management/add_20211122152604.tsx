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
  let [type, setType] = useState<any>({})
  let [types, setTypes] = useState<any>([])
  let [style, setStyle] = useState<any>({})
  let [styles, setStyles] = useState<any>([])
  let [list, setList] = useState<any>({})
  let [lists, setLists] = useState<any>([])
  let [url, setUrl] = useState('')
  let [styl, setStyl] = useState<any>(0)
  let [clickindex, setClickindex] = useState<any>(0)
  let onFinish = () => {
    let values: any = form.getFieldsValue()
    console.log(values);
    setArr(values)
    let ar = [...arrs, arr]
    setArrs(ar)
    console.log(arrs);


    form.resetFields()
  }
  let onFinish1 = () => {
    let values: any = form.getFieldsValue()
    console.log(values);
    setType(values)
    let ar = [...types, type]
    setTypes(ar)
    console.log(types);
    form.resetFields()
  }
  let onFinish2 = () => {
    let values: any = form.getFieldsValue()
    console.log(values);
    setStyle(values)
    let ar = [...styles, style]
    setStyles(ar)
    console.log(styles);
    form.resetFields()
  }
  let handleOk = () => {
    setIsModalVisible(false);
    let values: any = form.getFieldsValue()
    console.log(values);
    setList(values)
    let ar = [...lists, list]
    setLists(ar)
    console.log(types);
    form.resetFields()
    setPics(1)
    setTypes([])
    form.resetFields()
  };

  let handleCancel = () => {
    setPics(0)
    setIsModalVisible(false);
    setTypes([])
    form.resetFields()
  };
  let addpics = () => {
    setIsModalVisible(true)
  }

  const del = (index: number) => {
    console.log(index);
    
    arrs.splice(index, 1)
    let ar = arrs.splice(index, 1)
    setArrs(ar)
  }
  const del1 = (index: number) => {
    console.log(index); 
    types.splice(index, 1)
    let ar = types.splice(index, 1)
    setTypes(ar)
  }
  const del2 = (index2: number) => {
    styles.splice(index2, 1)
    let ar = styles.splice(index2, 1)
    setStyles(ar)
  }
  const fin = (item1: any) => {
    console.log(item1);
    
  }
  let addspec = () => {
    setStyl(1)
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
        
        </Form>

      </div>
    </div>
  )
}
export default Add

