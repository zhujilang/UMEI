import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { AddObj} from '@/types';

// 定义state的数据
export interface AddModelState {
  addInfo: AddObj[],
  typeInfo: AddObj[],
  purposeInfo: AddObj[],
  styleInfo: AddObj[],
  balanceInfo: AddObj[],
}

export interface AddModelType {
  namespace: 'Add'
  state: AddModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getbaseData: Effect,
    gettypeData: Effect,
    getpurposeData: Effect,
    getstyleData: Effect,
    getbalanceData: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<AddModelState>
    SetType: Reducer<AddModelState>
    SetPurpose: Reducer<AddModelState>
    SetStyle: Reducer<AddModelState>
    SetBalance: Reducer<AddModelState>
  }
}

const AddModel: AddModelType = {
  namespace: 'Add',
  state: {
    addInfo: [],
    typeInfo: [],
    purposeInfo: [],
    styleInfo: [],
    balanceInfo:[]
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    // 获取城市数据
    *getbaseData({ payload }, { call, put }) {
      let res = yield call(api.queryByPid, payload)
      console.log(res);
      
      if (res.code === 200) {
        res.data.map((item:AddObj) => {
          item.title = item.name
          item.key = item.id
          item.label = item.name
          item.value = item.parentId
        })
        yield put({
          type: 'SetAdd',
          payload: {
            payload:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    },
    *gettypeData({ payload }, { call, put }) {
      let res = yield call(api.queryGoodsType, payload)
      console.log(res);
      
      if (res.code === 200) {
        yield put({
          type: 'SetType',
          payload: {
            payload:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    },
    *getpurposeData({ payload }, { call, put }) {
      let res = yield call(api.queryGoodsPurpose, payload)
      console.log(res);
      
      if (res.code === 200) {
        yield put({
          type: 'SetPurpose',
          payload: {
            payload:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    },
    *getstyleData({ payload }, { call, put }) {
      let res = yield call(api.queryGoodsStyle, payload)
      console.log(res);
      
      if (res.code === 200) {
        yield put({
          type: 'SetStyle',
          payload: {
            payload:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    },
    *getbalanceData({ payload }, { call, put }) {
      let res = yield call(api.queryBalance, payload)
      console.log(res);
      
      if (res.code === 200) {
        yield put({
          type: 'SetBalance',
          payload: {
            payload:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    },
  },
  reducers: {
   []
  }
}

export default AddModel