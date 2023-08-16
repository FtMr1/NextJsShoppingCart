import React from 'react'

const ProductItem = ({product , cart , setCart}) => {

const addToCart = (product) =>{
    setCart([...cart , product])
}

  return (
    <div className='border p-4 m-2 rounded-lg shadow-lg'>
        <img src={product.image} className=' h-66 object-cover rounded-t-xl' alt="" />
        <div className='text-center'>
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray my-3'>{product.price} TL</p>
            <button onClick={()=>addToCart(product)} className=' bg-yellow-500 text-white px-4 py-1 rounded hover:bg-slate-500 w-full'>Sepete</button>
        </div>
    </div>
  )
}

export default ProductItem