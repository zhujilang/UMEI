import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { InformationObj} from '@/types';
import dayjs from 'dayjs'

// 定义state的数据
export interface InformationModelState {
  informationInfo: InformationObj[],
}

export interface InformationModelType {
  namespace: 'Information'
  state: InformationModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    getfashionlist: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    setInformationInfo: Reducer<InformationModelState>
  }
}

const InformationModel: InformationModelType = {
  namespace: 'Information',
  state: {
    informationInfo: [],
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    // 获取时尚资讯列表
    *getfashionlist({ payload }, { call, put }) {
      let res = yield call(api.getfashionlist,payload)
      console.log(res)
      if (res.code ===200) {
        message.success(res.msg,1)
        ClipboardItem.c
        yield put({
          type: 'setInformationInfo',
          payload: res.data.list,
          total:res.data.total
        })
      }else  message.error(res.msg,1)
    },
  },
  reducers: {
    setInformationInfo(state, action) {
        console.log(action);
        
      return {
        ...state,
        informationInfo: action.payload,
        total:action.total, 
      }
    },
  }
}

export default InformationModel