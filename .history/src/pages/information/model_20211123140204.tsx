import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';

// 定义state的数据
export interface InformationModelState {
  InformationInfo: any,
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
    informationInfo: {},
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    // 获取时尚资讯列表
    *getfashionlist({ payload }, { call, put }) {
      let res = yield call(api.getfashionlist,payload)
      // console.log(res)
      if (res.code ===200) {
        message.success(res.msg,1)
        // console.log(res);
        yield put({
          type: 'setInformationInfo',
          payload: res.data
        })
        //存储token和用户信息
        localStorage.setItem('token',res.token)
        localStorage.setItem('InformationInfo',JSON.stringify(res.data))
        window.location.pathname='/'
      }else  message.error(res.msg,1)
    },
  },
  reducers: {
    setInformationInfo(state, action) {
      return {
        ...state,
        informationInfo: action.payload,
      }
    },
  }
}

export default InformationModel