import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import HeaderUser from './HeaderUser';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const navigate = useNavigate()

const handleChangeEmail = (e) => setEmail(e.target.value)
const handleChangePass = (e) => setPass(e.target.value)
const user = {email,  password}
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res= await axios.post("http://localhost:3000/api/v1/user/auth/login",user)
    const role = res.data.data.role
    console.log(role);
    if(role === "User"){
      localStorage.setItem("user", JSON.stringify(res.data.data))
    Cookies.set('user', JSON.stringify(res.data.data))
      navigate('/')
    }else if ( role === "Admin") {
      localStorage.setItem("user", JSON.stringify(res.data.data))
    Cookies.set('user', JSON.stringify(res.data.data))
    navigate('/admin')}
  } catch (err) {
    console.log(err);
  }
}
    return <div className='text-center'>
     
       {localStorage.getItem("user") ? <HeaderUser/> : <Header /> }
        <h1 className=' text-6xl font-bold mt-12'>Login</h1>
        <div className='  h-screen flex justify-center mt-20 '>
    <div >
    <Form onSubmitCapture={handleSubmit}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input onChange={handleChangeEmail}  prefix={<MailOutlined  className="site-form-item-icon"/>} placeholder="Email" />
        
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password onChange={handleChangePass}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button mr-3">
          Log in
        </Button>
        Or <a href="/auth/signup"> Register now!</a>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>
}

export default LoginPage;