import React from 'react'
import styles from './Summary.module.css'
import { cartImages } from '../Cart/imports_and_assets'
import { useGlobalContext } from '../../context/globalContext'
import uuid from 'react-uuid'

const Summary = () => {
  const { cartData, grandTotal, cartTotal, shippingFee, vat } =
    useGlobalContext()

  const getitemImageOrName = (index, content) =>
    cartImages[cartData[index].image][content]

  return (
    <div className={styles.summary}>
      <h2>SUMMARY</h2>
      <div>
        {cartData.map((item, index) => {
          return (
            <div className={styles.item_body} key={uuid()}>
              <div className={styles.item_details}>
                <div className={styles.image_container}>
                  <img src={getitemImageOrName(index, 0)} alt='cart_image' />
                </div>
                <div>
                  <h4>{getitemImageOrName(index, 1)}</h4>
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

      <div className={styles.expenses}>
        <div>
          <p>TOTAL</p>
          <h4>${cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
        </div>
        <div>
          <p>SHIPPING</p>
          <h4>
            ${shippingFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h4>
        </div>
        <div>
          <p>VAT (INCLUDED)</p>
          <h4>${vat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h4>
        </div>
      </div>

      <div className={styles.grand_total}>
        <p>GRAND TOTAL</p>
        <h4>${grandTotal}</h4>
      </div>

      <button type='submit'>CONTINUE & PAY</button>
    </div>
  )
}

export default Summary
