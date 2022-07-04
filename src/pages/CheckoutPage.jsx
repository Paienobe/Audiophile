import React from 'react'
import CheckoutForm from '../components/CheckoutForm/CheckoutForm'
import Summary from '../components/Summary/Summary'

const CheckoutPage = () => {
  return (
    <div className='checkout_page'>
      <p className='back_btn'>Go Back</p>
      <div className='checkout_page_container'>
        <CheckoutForm />
        <Summary />
      </div>
    </div>
  )
}

export default CheckoutPage
