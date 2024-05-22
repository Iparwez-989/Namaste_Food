import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../reduxStore/cartSlice'
import ItemList from './ItemList'

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())

    }
  return (
    <>
    
    <button className='m-2 px-4 py-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear</button>
    
    <div className='m-1 text-center'>
        <p className='font-bold text-2xl'>Cart</p>
        {cartItems.length === 0 && <p>Your cart is empty. Add items to your cart.</p>}
        <div className='w-6/12 m-auto'>
            <ItemList items={cartItems}/>
        </div>
      
    </div>
    </>
  )
}

export default Cart
