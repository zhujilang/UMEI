import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { ManagementObj} from '@/types';
import Login from './../login/login';

// 定义state的数据
export interface ManagementModelState {
    managementInfo: ManagementObj[],
  total:number,
}

export interface ManagementModelType {
  namespace: 'Management'
  state: ManagementModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getadminlist: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetManagement: Reducer<ManagementModelState>
  }
}

const ManagementModel: ManagementModelType = {
  namespace: 'Management',
  state: {
    managementInfo: [],
    total:0,
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加装修方案
    *getadminlist({ payload }, { call, put }) {
      let res = yield call(api.getadminlist, payload)
      console.log(res);
      
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'ManagementList',
          payload: res.data.list,
          total:res.data.total
        })
      } else
        message.error(res.msg, 1)
    },
  },
  reducers: {
    SetManagement(state, action) {
        console.log(action);
        
      return {
        ...state, 
        managementInfo: action.payload,
        total:action.total,  
      }
      
      
    },
  }
}

export default ManagementModel