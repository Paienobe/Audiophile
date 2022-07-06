import React from 'react'
import styles from './CompletedOrder.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import { useGlobalContext } from '../../context/globalContext'
import { cartImages } from '../Cart/imports_and_assets'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const CompletedOrder = () => {
  const { grandTotal, cartData, setCompletedOrder, emptyCart, setCurrentPage } =
    useGlobalContext()
  const getItemImageOrName = (index, content) =>
    cartImages[cartData[index].image][content]

  return (
    <div className={styles.overlay}>
      <div className={styles.main_body}>
        <FaCheckCircle size={60} style={{ color: '#d87c4a' }} />
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className={styles.order_details}>
          <div className={styles.items_list}>
            {cartData.map((item, index) => {
              return (
                <div className={styles.item_body} key={uuid()}>
                  <div className={styles.item_details}>
                    <div className={styles.image_container}>
                      <img
                        src={getItemImageOrName(index, 0)}
                        alt='cart_image'
                      />
                    </div>
                    <div>
                      <h4>{getItemImageOrName(index, 1)}</h4>
                      <p>
                        $
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </p>
                    </div>
                  </div>

                  <p>x{item.quantity}</p>
                </div>
              )
            })}
          </div>
          <div className={styles.total}>
            <p>GRAND TOTAL</p>
            <h4>${grandTotal}</h4>
          </div>
        </div>

        <Link to='/'>
          <button
            onClick={() => {
              emptyCart()
              setCompletedOrder(false)
              setCurrentPage('HOME')
            }}
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CompletedOrder
