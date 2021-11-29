import { useDispatch, useSelector } from 'umi'
import { useState, useEffect } from 'react'
import {Form,Input,Button} from 'antd'


const Login = () => {
  let dispatch = useDispatch()
  //定义所需的变量
  let [vcode, setvcode] = useState('')
  // 接收数据
  let verifyCode = useSelector((state: any) => state.Login.loginInfo)
  //验证成功 登录
  const onFinish = (e: any) => {
    dispatch({
      type: 'Login/login',
      payload: e
    })
  }
  // 获取验证码
  let getData = () => {
    dispatch({
      type: 'Login/getverifyCode',
      payload: ''
    })
    setvcode(verifyCode)
  }
  useEffect(() => {
    getData()
  }, [])
  //   定义所需变量及修改
  return (
    <div>
      <div className={'login'}>
        <h1 className="brand">U</h1>
        <h2>我的U美生活</h2>
      </div>
    </div>
  )
}

export default Login
