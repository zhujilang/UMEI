import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { AddObj} from '@/types';

// 定义state的数据
export interface AddModelState {
  addInfo: AddObj[],
  typeInfo: AddObj[],
}

export interface AddModelType {
  namespace: 'Add'
  state: AddModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getbaseData: Effect,
    gettypeData: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<AddModelState>
    SetType: Reducer<AddModelState>
  }
}

const AddModel: AddModelType = {
  namespace: 'Add',
  state: {
    addInfo: [],
    typeInfo: [],
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
  },
  reducers: {
    SetAdd(state, action) {
      return {
        ...state, 
        addInfo:action.payload.payload
        
      }
    },
    SetType(state, action) {
      return {
        ...state, 
        typeInfo:action.payload.payload
        
      }
      
      
    },

  }
}

export default AddModel