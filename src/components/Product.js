import React from 'react';
import photo3 from '../Assets/shopping3.jpg';
import { Link } from 'react-router-dom';

function Product(props) {
    const {product , showButton} = props;
  return (
    <div className="border-[1px] border-[#669bbc] rounded-2xl w-[300px] h-[400px] relative  bg-white overflow-hidden" >
        <img src={product.image ? product.image : photo3} className="h-[50%] mx-auto mb-2" alt="..."/>
        <div className="px-3 ">
            <h5 className="font-bold">{product.title}</h5>
            <p className="text-sm">lorem ipsum</p>
            <h6 className="font-bold mb-2">Price: {product.price}</h6>
            {showButton && <Link to={`/product/${product.id}`} className=" absolute bottom-2 right-[20%] bg-[#669bbc] p-2 rounded-2xl font-bold text-white block text-center  w-[150px]">Details</Link> }
            
        </div>
    </div>
  )
}

export default Product
