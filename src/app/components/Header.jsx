import React from 'react'

import CartIcon from './CartIcon'
const Header = ({cart}) => {
  return (
    <div className='flex justify-between items-center py-3 '>
       <h1 className='text-2xl  font-bold m-auto'>Next js İle Sepete Ekleme</h1> 
      
      
      
      <CartIcon cart={cart}/>
       
    </div>
  )
}

export default Header