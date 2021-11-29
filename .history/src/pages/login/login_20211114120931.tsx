import{useDispatch} from 'umi'
import { useState } from '_@types_react@17.0.34@@types/react'


const Login = () => {
    let dispatch = useDispatch()
    //验证成功 登录
  const onFinish=(e:any)=>{
    dispatch({
      type:'Login/login',
      payload:e
    })
  }
  const [state, setState] = useState({
    disabled: false,
    version: Math.random(),
    username: '',
    password: '',
    verifyCode: ''
});
    return (
        <div>
            
        </div>
    )
}

export default Login
