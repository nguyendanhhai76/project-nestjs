import { Card } from 'antd';

const { Meta } = Card;

const CardProduct = (props) => (

  <Card className='relative'  
  key={props.id}
    hoverable
    style={{
      display: 'block',
      width: 240,
      height : 550,
      padding : 4,
      backgroundColor : 'rgb(241 245 249)'
    }}
    
    cover={<img  className=" h-60 w-60" alt="example" src={props.image}/>}
  >
    <Meta title={props.name} description={props.description} />

    <button className=' bg-red-600 hover:bg-red-700 px-3 py-2 mt-5  rounded-sm absolute bottom-3 left-12 '>Add to Cart</button>
    
  </Card>
);
export default CardProduct;