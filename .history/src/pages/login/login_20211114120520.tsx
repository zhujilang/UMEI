import{useDispatch} from 'umi'


const Login = () => {
    let dispatch = useDispatch()
    //验证成功 登录
  const onFinish=(e:any)=>{
    dispatch({
      type:'Login/login',
      payload:e
    })
  }
    return (
        <div>
            
        </div>
    )
}

export default Login
