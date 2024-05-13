import { Button,  Form, Input } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
}

const SignupPage = () => {
const [username, setUserName] = useState("")
const [email, setEmail] = useState("")
const [password, setPass] = useState("")
  
const handleChangeUserName = (e) => setUserName(e.target.value)
const handleChangeEmail = (e) => setEmail(e.target.value)
const handleChangePass = (e) => setPass(e.target.value)
const newUser = {username, email, password}
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res =  await axios.post("http://localhost:3000/api/v1/user/auth/signup",newUser)
    console.log(res);
    alert('Tạo mới tài khoản thành công!!')
    navigate("/")
  } catch (err) {
    console.log(err);
  }
}

  return <div>
    <Header/>
    <h1 className=' text-6xl font-bold mt-12 text-center'>SignUp</h1>
    <div className=' w-screen h-screen flex justify-center mt-12'>
    <Form onSubmitCapture={handleSubmit}
      name="normal_login"
      className="login-form text-center"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="user_name"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input onChange={handleChangeUserName} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        

        
      </Form.Item>
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
        name="pass_word"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password  onChange={handleChangePass}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm password"
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
        ]}
      >
        <Input.Password 
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      
      

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button">
          Đăng Kí
        </Button>
       
      </Form.Item>
    </Form>
    </div>
  
  </div>
}

export default SignupPage