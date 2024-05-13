import {   Space, Dropdown, Anchor } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Input,  } from 'antd';
import FormAddProduct from '../components/FormAddProduct';
import { useNavigate } from 'react-router-dom';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Tài Khoản
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Cài đặt
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/auth/login"
        onClick={() => localStorage.clear()}
        >
          Đăng xuất
        </a>
      ),
    },
  ];
  const onFinish = (values) => {
    console.log(values);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
const AdminPage = () => {
  const [user, setUser] = useState()
  const [product, setProduct] = useState()
  const [hide, setHide] = useState(1)
  const navigate = useNavigate()
  
  const callUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/user')
      setUser(response.data.data)
      navigate('/admin')
    } catch (error) {
      return error
    }
  }
  const handleDeleteUser = async (id) => {
    try {
      confirm('Bạn có muốn xoá tài khoản này ?')
      await axios.delete(`http://localhost:3000/api/v1/user/${id}`)
      callUser()
    } catch (error) {
      return error
    }
   
  }
  
  const callProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/products')
      setProduct(response.data.data)
      navigate('/admin')
    } catch (error) {
      return error
    }
  }
useEffect(() => {
  callUser()
  callProduct()
},[])

const handleActionProduct = () => {
  setHide(2)
}
const handleActionUser = () => {  
  setHide(1)    
}
const handleDeleteProduct = async (id) => {
  try {
    confirm('Bạn có muốn xoá sản phẩm này ?')
    await axios.delete(`http://localhost:3000/api/v1/products/${id}`)
    callProduct()
  } catch (error) {
    return error
  }
}
 
  return <div>
    <div className=" w-screen h-16 flex justify-between  items-center border shadow-lg">
        <div>
            <a href="/admin" >
                <img className=" px-6 my-3" src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png" alt="" />
            </a>
        </div>
        <div className='mx-10 text-3xl font-extrabold'>Admin</div>
        <div className=' flex'>
        <button className='  text-2xl font-semibold px-6  py-4 hover:bg-slate-100 focus:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300'
        onClick={handleActionProduct}>Quản lí Product</button>
        <button className='  text-2xl font-semibold px-10  py-4 hover:bg-slate-100 focus:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-300'
        onClick={handleActionUser}>Quản lí User</button>
        </div>
       
<div className=' w-max flex justify-between px-6'>
<Space wrap size={16}>
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <img className=" w-11 h-11" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      </Dropdown>
    </Space>
</Space>
</div>
    </div>
    {
      hide === 1 ? <div>
        <div 
      style={{
        padding: '20px',
        }}
    >
      <Anchor 
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'List User',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Update User',
          },
          
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"/>
        <table className='w-4/5 m-auto mt-10   '>
      <tr>
          <th className='  border-2 border-sky-500'>STT</th>
          <th className='  border-2 border-sky-500'>Username</th>
          <th className='  border-2 border-sky-500'>Email</th>
          <th className='  border-2 border-sky-500'>Password</th>
          <th className='  border-2 border-sky-500'>Role</th>
          <th className='  border-2 border-sky-500'>Action</th>
      </tr>
      {user?.map((user, index) => {
        return <tr key={index} className={user.role==="Admin" ? "text-red-500" : "text-black"} >
          <td className=' text-center  border-2 border-sky-500'>{index+1}</td>
          <td className=' text-center  border-2 border-sky-500'>{user.username}</td>
          <td className=' text-center  border-2 border-sky-500'>{user.email}</td>
          <td className=' text-center  border-2 border-sky-500'>{user.password}</td>
          <td className=' text-center  border-2 border-sky-500'>{user.role}</td>
          <td className=' text-center  border-2 border-sky-500'>
            <a className='font-semibold rounded-md px-6  py-4 hover:bg-green-300' href='#part-2' >Update</a> 
            <button className='font-semibold rounded-md px-6  py-4 hover:bg-red-400' onClick={() => handleDeleteUser(user.user_id)}>Delete</button> 
          </td> 
              </tr> 
              })}
  </table>
      <div
        id="part-2"
      />
      <div className=' text-center' >
  <h1 className=' font-bold text-5xl mt-8'>Update</h1>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input  />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item 
    name={['user', 'password']} 
    label="Password" rules={[
        {
          required: true,
        },
      ]}>
      <Input   />
    </Form.Item>
    <Form.Item name={['user', 'role']} label="Role"
     rules={[
      { required: true, }
      ]}>
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
    </div>
        </div> : null
    }
    {
      hide === 2 ? <div>
        <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'List Product',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Add Product',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Update Product',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"/>
       <table className='w-4/5 m-auto mt-10   '>
      <tr>
          <th className='  border-2 border-sky-500'>STT</th>
          <th className='  border-2 border-sky-500'>ProductName</th>
          <th className='  border-2 border-sky-500'>Price</th>
          <th className='  border-2 border-sky-500'>Category</th>
          <th className='  border-2 border-sky-500'>Image</th>
          <th className='  border-2 border-sky-500'>Description</th>
          <th className='  border-2 border-sky-500'>Quantity</th>
          <th className='  border-2 border-sky-500'>Action</th>
      </tr>
      {product?.map((product, index) => {
        return <tr key={index}>
          <td className=' text-center  border-2 border-sky-500'>{index+1}</td>
          <td className=' text-center  border-2 border-sky-500'>{product.name}</td>
          <td className=' text-center  border-2 border-sky-500'>{product.price}</td>
          <td className=' text-center  border-2 border-sky-500'>{product.category}</td>
          <td className=' text-center  border-2 border-sky-500'><img src={product.image} className=" w-20 h-20" alt="" /></td>
          <td className=' text-center  border-2 border-sky-500'>{product.description}</td>
          <td className=' text-center  border-2 border-sky-500'>{product.quantity}</td>
          <td className=' text-center  border-2 border-sky-500'>
            <a className='font-semibold rounded-md px-6  py-4 hover:bg-green-300' href='#part-2'  >Update</a> 
            <button className='font-semibold rounded-md px-6  py-4 hover:bg-red-400 ' onClick={() => handleDeleteProduct(product.id)}>Delete</button> 
          </td> 
              </tr> 
              })}
  </table>
      <div
        id="part-2"
        />
      <div className=' mt-9 text-center'>
          <button className='font-semibold rounded-md px-6 py-4 bg-red-500 hover:bg-red-700 '>Thêm sản phẩm mới</button>
          <FormAddProduct  />
    </div>
    </div>
  </div> : null
    }
    </div>
}
export default AdminPage