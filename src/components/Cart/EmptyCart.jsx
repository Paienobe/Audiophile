import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styles from './Cart.module.css'
import { RiCloseCircleFill } from 'react-icons/ri'

const EmptyCart = () => {
  const { closeCart } = useGlobalContext()
  return (
    <div className={(styles.empty_cart, styles.cart)}>
      <div
        className={styles.close}
        onClick={closeCart}
        style={{ cursor: 'pointer' }}
      >
        <RiCloseCircleFill style={{ color: '#d4784c' }} size={35} />
      </div>
      <p style={{ textAlign: 'center' }}>Your cart is empty</p>
      <img
        src='https://www.qrcardboard.com/images/cart.gif?v=01'
        alt='empty_cart'
        className={styles.empty_image}
      />
    </div>
  )
}

export default EmptyCart
