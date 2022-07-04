import React from 'react'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  return (
    <form>
      <h1>CHECKOUT</h1>
      <h4>BILLING DETAILS</h4>
      <div className={styles.billing_details}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Alexei Ward' />
        </div>

        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' placeholder='alexei@mail.com' />
        </div>

        <div>
          <label htmlFor='number'>Phone Number</label>
          <input type='number' name='number' placeholder='+1 202-555-0136' />
        </div>
      </div>

      <h4>SHIPPING INFO</h4>

      <label htmlFor='address'>Your Address</label>
      <input type='text' name='address' placeholder='1137 Williams Avenue' />

      <div className={styles.shipping_details}>
        <div>
          <label htmlFor='zip'>ZIP Code</label>
          <input type='number' name='zip' placeholder='10001' />
        </div>

        <div>
          <label htmlFor='city'>City</label>
          <input type='text' name='city' placeholder='New York' />
        </div>

        <div>
          <label htmlFor='country'>Country</label>
          <input type='text' name='country' placeholder='United States' />
        </div>
      </div>

      <h4>PAYMENT DETAILS</h4>
      <div className={styles.payment_method}>
        <label htmlFor='payment method'>Payment Method</label>
        <div className={styles.radio_housing}>
          <div className={styles.radio_container}>
            <input type='radio' name='payment_method' value='e-Money' />
            <p>e-Money</p>
          </div>

          <div className={styles.radio_container}>
            <input
              type='radio'
              name='payment_method'
              value='Cash on Delivery'
            />
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>

      <div className={styles.emoney_details}>
        <div>
          <label htmlFor='e-Money Number'>e-Money Number</label>
          <input type='number' name='e-Money Number' placeholder='238521993' />
        </div>

        <div>
          <label htmlFor='e-Money pin'>e-Money Pin</label>
          <input type='number' name='e-Money pin' placeholder='6891' />
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
