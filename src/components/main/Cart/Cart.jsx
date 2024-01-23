import React, { useContext } from 'react'
import styles from './Cart.module.css'
import Button from '../Button/Button'
import CartItem from './CartItem'
import { CartContext, CartItemContext } from '../../Contexts'

const Cart = () => {

  const [ showCart, setShowCart ] = useContext(CartContext);

  
const [ cartItemCount, setCartItemCount ] = useContext(CartItemContext);

  const hideCart = e => {

    e.target === e.currentTarget && setShowCart(false);
    
  }

  return (

   <div className={styles.cartModal} onClick={hideCart}>

    <section className={styles.section}>
   
   <h2 className={styles.head}>Cart</h2>

   { cartItemCount === 0 &&  <p className={styles['empty-cart']}>Your cart is empty.</p> }

   { cartItemCount !== 0 &&  <CartItem /> }
   
   { cartItemCount !== 0 &&  <Button type='checkout' text='Checkout' /> }

   </section>

    
   </div>

  )
}

export default Cart