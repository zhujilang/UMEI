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
    *OrderList({ payload }, { call, put }) {
      let res = yield call(api.getlistOrder, payload)
      console.log(res);
      
      if (res.code === 200) {
        res.data.list.length && res.data.list.map((item: OrderObj, index: number) => {
          item.key = index + 1
        })
        res.data.list.length && res.data.list.map((item: OrderObj) => {
          if(item.status=='0'){
            return  item.status = '下架'
          }else if(item.status=='1'){
            return  item.status = '上架'
          }else if(item.status=='2'){
            return  item.status = '审核中'
          }else{
            return  item.status = '审核未通过'
          }
          
        }
        )
        res.data.list.length && res.data.list.map((item: OrderObj) => {
          if(item.categoryId=='1'){
            return  item.categoryId = '整装'
          }else if(item.categoryId=='2'){
            return  item.categoryId = '软装'
          }else{
            return  item.categoryId = '硬装'
          }
          
        }
        )
        yield put({
          type: 'SetOrder',
          payload: res.data.list,
          total:res.data.total
        })
      } else message.error(res.msg, 1)
    },
    //修改整屋
    *EditCarouse({ payload }, { call, put }) {
      let res = yield call(api.postupdate, payload)
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
    //下架装修方案
    *postselected({ payload }, { call, put }) {
      let res = yield call(api.postselected, payload)
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