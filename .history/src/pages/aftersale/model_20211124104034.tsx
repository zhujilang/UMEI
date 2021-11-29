import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { AftersaleObj } from '@/types';

// 定义state的数据
export interface AftersalModelState {
  aftersalInfo: AftersaleObj[],
  total:number
}

export interface AftersalModelType {
  namespace: 'Aftersal'
  state: AftersalModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddAftersal: Effect,

  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAftersal: Reducer<AftersalModelState>
  }
}

const AftersalModel: AftersalModelType = {
  namespace: 'Aftersal',
  state: {
    aftersalInfo: [],
    total:0
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加轮播图
    //获取售后列表
    *getaftersalelist({ payload }, { call, put }) {
      let res = yield call(api.getaftersalelist, payload)
      if (res.code === 200) {
        res.data.length && res.data.map((item: AftersalObj, index: number) => {
          item.key = index + 1
        })
        yield put({
          type: 'SetAftersal',
          payload: res.data,
          total:res.total
        })
      } else message.error(res.msg, 1)
    },
  },
  reducers: {
    SetAftersal(state, action) {
      return {
        ...state,
        aftersalInfo: action.payload,
        total:action.total
      }
    },
  }
}

export default AftersalModel