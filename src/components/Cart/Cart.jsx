import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styles from './Cart.module.css'
import EmptyCart from './EmptyCart'
import FilledCart from './FilledCart'

const Cart = () => {
  const { cartData, setShowCart } = useGlobalContext()

  return (
    <div className={styles.cart_container}>
      {cartData?.length < 1 ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart
