import { Effect, Reducer } from 'umi'
import api from '@/http/api'
import { message } from 'antd';
import { OrderObj} from '@/types';

// 定义state的数据
export interface OrderModelState {
  OrderInfo: OrderObj[],
  total:number,
}

export interface OrderModelType {
  namespace: 'Order'
  state: OrderModelState
  // 等同于vuex里面的action 用来发请求的
  effects: {
    AddOrder: Effect,
    OrderList: Effect,
    EditCarouse: Effect,
    postselected: Effect,
  },
  // 等同于vuex里面的mutation
  reducers: {
    SetOrder: Reducer<OrderModelState>
  }
}

const OrderModel: OrderModelType = {
  namespace: 'Order',
  state: {
    OrderInfo: [],
    total:0,
  },
  effects: {
    // *等同于async
    // payload请求传递的参数
    //添加装修方案
    *AddOrder({ payload }, { call, put }) {
      let res = yield call(api.postsave, payload)
      if (res.code === 200) {
        message.success(res.msg, 1)
        yield put({
          type: 'OrderList',
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
    
  },
  reducers: {
    SetOrder(state, action) {
      return {
        ...state, 
        OrderInfo: action.payload,
        total:action.total,  
      }
      
      
    },
  }
}

export default OrderModel