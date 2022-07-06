import React from 'react'
import { useState } from 'react'
import styles from './CheckoutForm.module.css'

const CheckoutForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
    paymentMethod: 'e-Money',
    eMoneyNumber: '',
    eMoneyPin: '',
  })

  return (
    <div className={styles.form_body}>
      <h1>CHECKOUT</h1>
      <h4>BILLING DETAILS</h4>
      <div className={styles.billing_details}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Alexei Ward' required />
        </div>

        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            placeholder='alexei@mail.com'
            required
          />
        </div>

        <div>
          <label htmlFor='number'>Phone Number</label>
          <input
            type='number'
            name='number'
            placeholder='+1 202-555-0136'
            required
          />
        </div>
      </div>

      <h4>SHIPPING INFO</h4>

      <label htmlFor='address'>Your Address</label>
      <input
        type='text'
        name='address'
        placeholder='1137 Williams Avenue'
        required
      />

      <div className={styles.shipping_details}>
        <div>
          <label htmlFor='zip'>ZIP Code</label>
          <input type='number' name='zip' placeholder='10001' required />
        </div>

        <div>
          <label htmlFor='city'>City</label>
          <input type='text' name='city' placeholder='New York' required />
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
            <input
              type='radio'
              name='payment_method'
              value='e-Money'
              onClick={() => {
                setFormValues({
                  ...formValues,
                  paymentMethod: 'e-Money',
                })
              }}
            />
            <p>e-Money</p>
          </div>

          <div className={styles.radio_container}>
            <input
              type='radio'
              name='payment_method'
              value='Cash_on_Delivery'
              onClick={() => {
                setFormValues({
                  ...formValues,
                  paymentMethod: 'Cash_on_Delivery',
                })
              }}
            />
            <p>Cash on Delivery</p>
          </div>
        </div>
      </div>

      {formValues.paymentMethod === 'e-Money' ? (
        <div className={styles.emoney_details}>
          <div>
            <label htmlFor='e-Money Number'>e-Money Number</label>
            <input
              type='number'
              name='e-Money Number'
              placeholder='238521993'
              required
            />
          </div>

          <div>
            <label htmlFor='e-Money pin'>e-Money Pin</label>
            <input
              type='number'
              name='e-Money pin'
              placeholder='6891'
              required
            />
          </div>
        </div>
      ) : (
        <p className={styles.cash_payment}>
          The "Cash on Delivery" option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      )}
    </div>
  )
}

export default CheckoutForm
