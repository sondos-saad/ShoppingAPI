import React, { useEffect, useState } from 'react'
import Product from './Product'


function ProductsList() {
    const api_url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);   
    const [categories, setCategories] = useState([]);   

    const getProducts = () => {
        fetch(api_url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    const getCategory = () => {
        fetch(`${api_url}/categories`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }
const  getProductsInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
    .then(res => res.json())
    .then(data => setProducts(data))
}

    useEffect(() => {
        getProducts()
        getCategory()
    }, []);

  return (
    <div className='py-[4rem]'>
      <div className=' w-[80%] mx-auto'>
            <h1 className='font-bold text-[#669bbc] text-center mb-[2rem] text-[2rem]'>Our Products</h1>
            <button onClick={() => getProducts()} className='products__btn '>All</button>
            {
                categories.map(category => (
                <button onClick={() => getProductsInCategory(category)} className='products__btn' key={category}>{category}</button>
            ))}
            <div className=' flex flex-wrap justify-between gap-5'>
                {products.map(product => (
                    <div className='' key={product.id}>
                        <Product product={product} showButton={true} />
                    </div>
                ))}
            </div>
            
      </div>
    </div>
  )
}

export default ProductsList
