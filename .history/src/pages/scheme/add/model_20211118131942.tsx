import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';


// 定义state的数据
export interface AddModelState {
  addInfo:AddObj[]
}

export interface AddModelType {
  namespace: 'Add'
  state: AddModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getbaseData:Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<AddModelState>
  }
}

const AddModel: AddModelType = {
  namespace: 'Add',
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
        AddInfo: action.payload,
        total:action.total,
        addInfo:action.payload
        
      }
      
      
    },
  }
}

export default AddModel