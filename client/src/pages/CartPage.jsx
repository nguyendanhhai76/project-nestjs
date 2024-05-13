import HeaderUser from "../components/HeaderUser"

const CartPage = () => {
  return (
    <div>
        <HeaderUser/>
        <h1 className=" text-7xl font-bold mt-5 ml-10">My Cart</h1>
        <div>
        <table className='w-4/5 m-auto mt-10   '>
      <tr>
          <th className='  border-2 border-sky-500'>STT</th>
          <th className='  border-2 border-sky-500'>ProductName</th>
          <th className='  border-2 border-sky-500'>Image</th>
          <th className='  border-2 border-sky-500'>Price</th>
          <th className='  border-2 border-sky-500'>Quantity</th>
          <th className='  border-2 border-sky-500'>Total</th>
          <th className='  border-2 border-sky-500'>Action</th>
      </tr>
      
  </table>
        </div>
    </div>
  )
}

export default CartPage