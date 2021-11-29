import { useDispatch, useSelector } from 'umi'
import { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import '../index.less'


const Login = () => {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  let dispatch = useDispatch()
  //定义所需的变量
  let [vcode, setvcode] = useState('')
  let [bit, setbit] = useState(0)
  // 接收数据
  let verifyCode = useSelector((state: any) => state.Login.loginInfo)
  //验证成功 登录
  const onFinish = (e: any) => {
    setbit(1)
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
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password" 
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" >
              
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
              {bit===1 ? "登录中..." : "登录"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
