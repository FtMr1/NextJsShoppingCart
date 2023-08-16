import React from 'react'
import ProductItem from './ProductItem'
import data from '../data'
const Product = (props) => {
  return (
    <div className='grid grid-cols-3 gap-8 mb-6'>
        {data.map((product , index)=>(
               <ProductItem key={index} product={product} cart={props.cart} setCart={props.setCart}/> 
        ))}

    </div>
  )
}

export default Product