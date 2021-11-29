import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { SchemeObj} from '@/types';

// 定义state的数据
export interface SchemeModelState {
  schemeInfo: SchemeObj[],
  total:number,
}

export interface SchemeModelType {
  namespace: 'Scheme'
  state: SchemeModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddScheme: Effect,
    SchemeList: Effect,
    EditCarouse: Effect,
    postselected: Effect,
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
    total:0,
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加装修方案
 
    
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
  },
  reducers: {
    SetScheme(state, action) {
      return {
        ...state, 
        schemeInfo: action.payload,
        total:action.total,
        addInfo:action.payload
        
      }
      
      
    },
  }
}

export default SchemeModel