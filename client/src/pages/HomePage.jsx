import { useEffect, useState } from "react";
import HeaderUser from "../components/HeaderUser";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import LoginPage from "../components/Login";

const HomePage = () => {
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);

    const callProduct = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/products')
            setProducts(response.data.data)
            // setCart(user.cart)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        callProduct()
    },[])

    const handleDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return <div>
        {localStorage.getItem("user") ? <HeaderUser/> : <Header /> }

        <div className=" w-3/4 flex flex-wrap gap-5 justify-around mt-12 m-auto ">
            {
                products?.map((products) => {
                   return <div onClick={() => handleDetail(products.id)} >
                     <CardProduct 
                     id={products.id}
                     name={products.name}
                     image={products.image}
                     description={products.description}
                 />
                   </div> 
                })
               
            }
        </div>
    </div>
}

export default HomePage;