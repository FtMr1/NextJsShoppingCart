import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
const CartIcon = ({cart}) => {
  return (
    <div>
        <div  className='relative'>
      <AiOutlineShopping/>
      <span className=' bg-red-500 text-white flex justify-center items-center rounded-full absolute -top-2 w-3 h-3 -right-1 text-xs '>{cart.length}</span>
      </div> 
    </div>
  )
}

export default CartIcon