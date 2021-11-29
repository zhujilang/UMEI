import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import {  AddObj} from '@/types';

// 定义state的数据
export interface AddModelState {
  addInfo:AddObj[]
  TypeInfo:AddObj[]
}

export interface AddModelType {
  namespace: 'Add'
  state: AddModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {

    getbaseData:Effect,
    queryGoodsType:Effect
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<AddModelState>
    SetAddlist:Reducer<AddModelState>
  }
}

const AddModel: AddModelType = {
  namespace: 'Add',
  state: {
    addInfo: [],
    TypeInfo:[]
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
    // 查询方案类型
    *queryGoodsType({ payload }, { call, put }) {
        let res = yield call(api.queryGoodsType, payload)
        if (res.code === 200) {
          yield put({
            type: 'SetAddlist',
            payload: {
              d:res.data
            }
          })  
        } else
          message.error(res.msg, 1)
      }
  },
  reducers: {
    SetAdd(state, action) {
        console.log(action);
      return {
        ...state, 
        addInfo:action.payload.payload 
      }
    },
    SetAddlist(state, action) {
        console.log(action,1);
      return {
        ...state, 
        TypeInfo:action.payload.payload 
      }
    },
  }
}

export default AddModel