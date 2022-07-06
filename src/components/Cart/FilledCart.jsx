import React, { useState } from 'react'
import uuid from 'react-uuid'
import { useGlobalContext } from '../../context/globalContext'
import styles from './Cart.module.css'
import { cartImages } from './imports_and_assets'
import { Link } from 'react-router-dom'
import { RiCloseCircleFill } from 'react-icons/ri'

const FilledCart = () => {
  const { cartData, setCartData, setShowCart, emptyCart, closeCart } =
    useGlobalContext()

  const getitemImage = (index) => cartImages[cartData[index].image][0]
  const getItemShortName = (index) => cartImages[cartData[index].image][1]

  const totalAmountOfItemsInCart = cartData?.reduce((currentTotal, item) => {
    return item.price * item.quantity + currentTotal
  }, 0)

  const quantityOfItemsInCart = cartData?.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  const increaseOrDecreaseItemQuantity = (name, operation) => {
    const itemWithQuantityToBeIncreasedOrDecreased = cartData?.find((item) => {
      return item.name === name
    })

    if (itemWithQuantityToBeIncreasedOrDecreased) {
      const updatedCartData = cartData?.map((item) => {
        if (item.name === name) {
          return operation === 'increase'
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item, quantity: item.quantity - 1 }
        } else return item
      })

      const itemsWithQuantityGreaterThanZero = updatedCartData.filter(
        (item) => {
          return item.quantity !== 0
        }
      )

      if (itemsWithQuantityGreaterThanZero) {
        setCartData(itemsWithQuantityGreaterThanZero)
      } else {
        setCartData(updatedCartData)
      }
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart_head}>
        <div
          className={styles.close}
          onClick={closeCart}
          style={{ cursor: 'pointer' }}
        >
          <RiCloseCircleFill style={{ color: '#d4784c' }} size={35} />
        </div>
        <h3>CART ({quantityOfItemsInCart})</h3>
        <p
          onClick={emptyCart}
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          Remove All
        </p>
      </div>

      <div className={styles.all_items_holder}>
        {cartData?.map((item, index) => {
          return (
            <div key={uuid()}>
              <div className={styles.item_details_container}>
                <div className={styles.item_details}>
                  <div className={styles.image_container}>
                    <img src={getitemImage(index)} alt='cart_image' />
                  </div>
                  <div>
                    <h4>{getItemShortName(index)}</h4>
                    <p>
                      $
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </p>
                  </div>
                </div>

                <div className={styles.button_container}>
                  <div>
                    <button
                      onClick={() => {
                        increaseOrDecreaseItemQuantity(item.name, 'decrease')
                      }}
                    >
                      -
                    </button>
                    <p className={styles.quantity}>{item.quantity}</p>
                    <button
                      onClick={() => {
                        increaseOrDecreaseItemQuantity(item.name, 'increase')
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.total_container}>
        <p>TOTAL</p>
        <p>
          $
          {totalAmountOfItemsInCart
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <Link to='/checkout'>
        <button
          className={styles.checkout_button}
          onClick={() => {
            setShowCart(false)
          }}
        >
          CHECKOUT
        </button>
      </Link>
    </div>
  )
}

export default FilledCart
