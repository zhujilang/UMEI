import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import {  AddObj} from '@/types';

// 定义state的数据
export interface AddModelState {
  addInfo:AddObj[]
}

export interface AddModelType {
  namespace: 'Add'
  state: AddModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getbaseData:Effect,

  },
  // 等同于vuex里面的mutation
  reducers: {
    SetAdd: Reducer<AddModelState>
  }
}

const AddModel: AddModelType = {
  namespace: 'Add',
  state: {
    addInfo: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    // 获取城市数据
    
    // 查询方案类型
     //查询用
  },
  

  reducers: {
    SetAdd(state, action) {
      return {
        ...state, 
        addInfo:action.payload.payload 
      }
    }
    
    
  }


export default AddModel