import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { AftersaleObj } from '@/types';

// 定义state的数据
export interface AftersaleModelState {
  aftersaleInfo: AftersaleObj[],
  total:number
}

export interface AftersaleModelType {
  namespace: 'Aftersale'
  state: AftersaleModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getaftersalelist: Effect,

  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAftersale: Reducer<AftersaleModelState>
  }
}

const AftersaleModel: AftersaleModelType = {
  namespace: 'Aftersale',
  state: {
    aftersaleInfo: [],
    total:0
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //获取售后列表
    *getaftersalelist({ payload }, { call, put }) {
      let res = yield call(api.getaftersalelist, payload)
      console.log();
      
      if (res.code === 200) {
        yield put({
          type: 'SetAftersal',
          payload: res.data.list,
          total:res.total
        })
      } else message.error(res.msg, 1)
    },
  },
  reducers: {
    SetAftersale(state, action) {
      return {
        ...state,
        aftersaleInfo: action.payload,
        total:action.total
      }
    },
  }
}

export default AftersaleModel