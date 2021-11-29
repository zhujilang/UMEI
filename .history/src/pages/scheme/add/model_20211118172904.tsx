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