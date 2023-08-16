import React from 'react'

const Cart = ({cart , deleteCart}) => {
    const total = cart.reduce((acc , item) =>acc + item.price  , 0 )

    if(cart.length === 0 ) return;
  return (
    <div className='border ml-auto w-72 p-4 mt-3 rounded-md shadow-sm'>
        <h2 className='text-2xl font-sans'>Sepet</h2>
        <ul className=''>
           {cart.map((item, id)=>(
             <li className='mt-3 flex justify-between' key={id}>
             <span>{item.name}</span>
             <span>{item.price} TL</span>
     </li>
           ))}
        </ul>
        <hr className='my-3' />
        <p className=' font-bold text-xl'>Total : {total}</p>
        <button onClick={deleteCart} className=' bg-red-600 text-white py-2 rounded-full hover:bg-black transition-all w-full mt-3' >Sepeti Boşalt</button>
    </div>
  )
}

export default Cart