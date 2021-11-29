import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import {  AddObj} from '@/types';

// 定义state的数据
export interface SchemeModelState {
  addInfo:AddObj[]
}

export interface SchemeModelType {
  namespace: 'Scheme'
  state: SchemeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {

    getbaseData:Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<SchemeModelState>
  }
}

const SchemeModel: SchemeModelType = {
  namespace: 'Scheme',
  state: {
    addInfo: []
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    // 获取城市数据
    *getbaseData({ payload }, { call, put }) {
      let res = yield call(api.queryByPid, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SetAdd',
          payload: {
            bset:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    }
  },
  reducers: {
    SetAdd(state, action) {
      return {
        ...state, 
        schemeInfo: action.payload,
        total:action.total,
        addInfo:action.payload
        
      }
      
      
    },
  }
}

export default SchemeModel