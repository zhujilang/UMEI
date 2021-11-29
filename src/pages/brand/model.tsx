import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { BrandObj } from '@/types';

// 定义state的数据
export interface BrandModelState {
  brandInfo: BrandObj[],
}

export interface BrandModelType {
  namespace: 'Brand'
  state: BrandModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    addbrand: Effect,

  },
  // 等同于vuex里面的mutation
  reducers: {
    SetBrand: Reducer<BrandModelState>
  }
}

const BrandModel: BrandModelType = {
  namespace: 'Brand',
  state: {
    brandInfo: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //获取售后列表
    *addbrand({ payload }, { call, put }) {
      let res = yield call(api.addbrand, payload)
      console.log(res);
      if (res.code === 200) {
        yield put({
          type: 'SetAftersal',
          payload: res.data,
        })
      } else message.error(res.msg, 1)
    },
  },
  reducers: {
    SetBrand(state, action) {
      return {
        ...state,
        brandInfo: action.payload,
      }
    },
  }
}

export default BrandModel