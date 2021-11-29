import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { SchemeObj } from '@/types';

// 定义state的数据
export interface SchemeModelState {
  schemeInfo: SchemeObj[],
  total:number
}

export interface SchemeModelType {
  namespace: 'Scheme'
  state: SchemeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddScheme: Effect,
    SchemeList: Effect,
    EditCarouse: Effect,
    postselected: Effect
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
    total:0
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
    //获取整屋列表
    *SchemeList({ payload }, { call, put }) {
      let res = yield call(api.getlistOrder, payload)
      console.log(res);
      if (res.code === 200) {
        res.data.length && res.data.map((item: SchemeObj, index: number) => {
          if(item.status=='0'){
            return  item.status = '下架'
          }else if(item.status=='0'){
            return  item.status = '下架'
          }
        })
        yield put({
          type: 'SetScheme',
          payload: res.data.list,
          total:res.total
        })
      } else message.error(res.msg, 1)
    },
    //修改整屋
    *EditCarouse({ payload }, { call, put }) {
      let res = yield call(api.postupdate, payload)
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
    //下架装修方案
    *postselected({ payload }, { call, put }) {
      let res = yield call(api.postselected, payload.id)
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
    }
  },
  reducers: {
    SetScheme(state, action) {
      return {
        ...state,
        schemeInfo: action.payload,
        total:action.total,
        
      }
      
      
    },
  }
}

export default SchemeModel