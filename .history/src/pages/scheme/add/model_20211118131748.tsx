import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { SchemeObj, AddObj} from '@/types';

// 定义state的数据
export interface SchemeModelState {
  schemeInfo: SchemeObj[],
  total:number,
  addInfo:AddObj[]
}

export interface SchemeModelType {
  namespace: 'Scheme'
  state: SchemeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddScheme: Effect,
    SchemeList: Effect,
    EditCarouse: Effect,
    postselected: Effect,
    getbaseData:Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetScheme: Reducer<SchemeModelState>
  }
}

const SchemeModel: SchemeModelType = {
  namespace: 'Scheme',
  state: {
    schemeInfo: [],
    total:0,
    addInfo: []
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加装修方案
    *AddScheme({ payload }, { call, put }) {
      let res = yield call(api.postsave, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SchemeList',
          payload: {
            current: payload.pageNum,
            pageSize: payload.pageSize,
            query: payload.query
          }
        })
      } else
        message.error(res.msg, 1)
    },
   
    // 获取城市数据
    *getbaseData({ payload }, { call, put }) {
      let res = yield call(api.queryByPid, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SetScheme',
          payload: {
            bset:res.data
          }
        })  
      } else
        message.error(res.msg, 1)
    }
  },
  reducers: {
    SetScheme(state, action) {
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