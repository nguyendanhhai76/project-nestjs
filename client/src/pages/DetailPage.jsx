import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const DetailPage = () => {
  const navigate = useNavigate()
  const param = useParams();
  const [product, setProduct] = useState({})

  const callProduct = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/products/${param.id}`)
        setProduct(response.data.data)
    } catch (error) {
        return error
    }
}

  const handleAddCart = () => { 
    const checkUser = JSON.parse(localStorage.getItem('user'))
    if (!checkUser) {
      navigate('/auth/login')
    }}

  useEffect(() => {
    callProduct()
  }, [])
  return (
    <div className=" flex gap-36">
      <img src={product.image} alt="" className=" w-1/2 h-screen " />
      <div className=" mt-8">
      <h1 className=" font-mono text-6xl font-bold">{product.name}</h1>
      <p className=" font-mono text-3xl mt-4 font-semibold">{product.price}</p>
      <p className=" font-mono text-3xl mt-4">{product.description}</p>
      <div className=" flex gap-10">
      <button className=" w-40 mt-48 rounded-lg h-12 bg-red-600  hover:bg-red-700" onClick={handleAddCart}>Thêm vào giỏ hàng</button>
      <button className=" w-40 mt-48 rounded-lg h-12 bg-red-600  hover:bg-red-700">Mua ngay</button>
      </div>      
        </div>
      <div className=" text-4xl font-medium mr-5 mt-3 cursor-pointer" onClick={() => navigate('/')}>X</div>
    </div>
  )
}

export default DetailPage