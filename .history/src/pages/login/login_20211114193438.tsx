import{useDispatch} from 'umi'
import { useState, useEffect } from 'react'


const Login = () => {
    let dispatch = useDispatch()
    //定义所需的变量

    //验证成功 登录
  const onFinish=(e:any)=>{
    dispatch({
      type:'Login/login',
      payload:e
    })
  }
  // 获取验证码
  let getData=() => {
    
  }
  useEffect(() => {
    getData()
  }, [])
//   定义所需变量及修改
    return (
        <div>
            
        </div>
    )
}

export default Login
