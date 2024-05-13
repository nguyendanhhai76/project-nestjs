import { Button, Form, Input,  } from 'antd';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
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
  
};
/* eslint-enable no-template-curly-in-string */


const FormAddProduct = () => {
    const  navigate = useNavigate()
    const onFinish = (values) => {
        axios.post('http://localhost:3000/api/v1/products', values.product)
        alert("Thêm sản phẩm thành công !!")
        navigate("/admin")
      };
      return (
  <Form
    {...layout}
    name="product"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['product', 'name']}
      label="ProductName"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['product', 'price']}
      label="Price"
      rules={[
        
        {
            required: true,
          },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['product', 'category']}
      label="Category"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['product', 'quantity']}
      label="Quantity"
      rules={[
       
        {
            required: true,
          },
      ]}
    >
      <Input />
    </Form.Item>
{/*     
    <Form.Item name={['product', 'image']} label="Image" > 
        <input type="file" className=' ml-10' />
    </Form.Item> */}
    <Form.Item name={['product', 'image']} label="Image"
    rules={[
        {
          required: true,
        },
      ]}>
        
      <Input />
    </Form.Item>
    <Form.Item name={['product', 'description']} label="Description"rules={[
        {
          required: true,
        },
      ]}
    >
      <Input.TextArea />
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
  )
};
export default FormAddProduct;