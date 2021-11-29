import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { SchemeObj } from '@/types';

// 定义state的数据
export interface SchemeModelState {
  SchemeInfo: SchemeObj[],
  total:number
}

export interface SchemeModelType {
  namespace: 'Scheme'
  state: SchemeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddScheme: Effect,
    SchemeList: Effect,
    EditStatus: Effect,
    EditCarouse: Effect,
    DelCarouse: Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetScheme: Reducer<SchemeModelState>
  }
}

const SchemeModel: SchemeModelType = {
  namespace: 'Scheme',
  state: {
    SchemeInfo: [],
    total:0
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加轮播图
    *AddScheme({ payload }, { call, put }) {
      let res = yield call(api.postsave, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SchemeList',
          payload: {
            current: payload.current,
            pageSize: payload.pageSize,
            query: payload.query
          }
        })
      } else
        message.error(res.msg, 1)
    },
    //获取轮播图列表
    *SchemeList({ payload }, { call, put }) {
      let res = yield call(api.getlistOrder, payload)
      if (res.code === 200) {
        res.data.length && res.data.map((item: SchemeObj, index: number) => {
          item.key = index + 1
        })
        yield put({
          type: 'SetScheme',
          payload: res.data,
          total:res.total
        })
      } else message.error(res.msg, 1)
    },
    //修改轮播图状态
    *EditStatus({ payload }, { call, put }) {
      let res = yield call(api.showBanner, payload)
      res.code === 200 ? message.success(res.msg, 1) : message.error(res.msg, 1)
    },
    //编辑轮播图
    *EditCarouse({ payload }, { call, put }) {
      let res = yield call(api.postupdate, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SchemeList',
          payload: {
            current: payload.current,
            pageSize: payload.pageSize,
            query: payload.query
          }
        })
      } else
        message.error(res.msg, 1)
    },
    //删除轮播图
    *DelCarouse({ payload }, { call, put }) {
      let res = yield call(api.postselected, payload.id)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'SchemeList',
          payload: {
            current: payload.current,
            pageSize: payload.pageSize,
            query: payload.query
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
        SchemeInfo: action.payload,
        total:action.total
      }
    },
  }
}

export default SchemeModel