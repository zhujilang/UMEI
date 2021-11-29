import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { AftersaleObj } from '@/types';

// 定义state的数据
export interfaceAftersalModelState {
 AftersalInfo: AftersaleObj[],
  total:number
}

export interfaceAftersalModelType {
  namespace: 'Carousel'
  state:AftersalModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddCarousel: Effect,
   AftersalList: Effect,
    EditStatus: Effect,
    EditCarouse: Effect,
    DelCarouse: Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetCarousel: Reducer<CarouselModelState>
  }
}

constAftersalModel:AftersalModelType = {
  namespace: 'Carousel',
  state: {
   AftersalInfo: [],
    total:0
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加轮播图
    //获取售后列表
    *CarouselList({ payload }, { call, put }) {
      let res = yield call(api.getBanner, payload)
      if (res.code === 200) {
        res.data.length && res.data.map((item:AftersalObj, index: number) => {
          item.key = index + 1
        })
        yield put({
          type: 'SetCarousel',
          payload: res.data,
          total:res.total
        })
      } else message.error(res.msg, 1)
    },
  },
  reducers: {
    SetCarousel(state, action) {
      return {
        ...state,
       AftersalInfo: action.payload,
        total:action.total
      }
    },
  }
}

export defaultAftersalModel