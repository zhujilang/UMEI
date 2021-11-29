import { useDispatch, useSelector } from 'umi'
import { useState, useEffect } from 'react'
import { Form, Input, Button, Col, Row } from 'antd'
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

            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className={}>用户名</div>
            <Form.Item
              name="username"

              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="请输入你的用户名" />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"

              wrapperCol={{ span: 16 }}
            >
              <Input.Password placeholder="请输入你的密码" />
            </Form.Item>
            <Form.Item label="验证码"
              name="verifyCode"
              wrapperCol={{ span: 8 }} >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                  >
                    <Input placeholder="请输入验证码"/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <img src="47.108.69.213:8081"/>
                </Col>
              </Row>

            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" block>
                {bit === 1 ? "登录中..." : "登录"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
