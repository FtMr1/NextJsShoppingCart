'use client'
import Image from 'next/image'
import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'
import { useState } from 'react'

export default function Home() {

  const [cart, setCart] = useState([ ]);
  const deleteCart = () =>{
    setCart([])

  }
  return (
    <main className="container m-auto ">
        <Header cart={cart}/>
        <Product cart={cart} setCart={setCart}/>
        <Cart cart={cart} deleteCart={deleteCart}/>
    </main>
  )
}
