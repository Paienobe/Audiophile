import React, { useEffect } from 'react'
import CheckoutForm from '../components/CheckoutForm/CheckoutForm'
import Summary from '../components/Summary/Summary'
import { useNavigate, useLocation } from 'react-router-dom'
import CompletedOrder from '../components/CompletedOrder/CompletedOrder'
import { useGlobalContext } from '../context/globalContext'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { completedOrder, setCompletedOrder } = useGlobalContext()
  useEffect(() => {
    if (completedOrder) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }
  }, [completedOrder])

  const pathName = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  return (
    <div className='checkout_page'>
      <p
        className='back_btn'
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </p>
      <form
        className='checkout_page_container'
        onSubmit={(e) => {
          e.preventDefault()
          window.scrollTo(0, 0)
          setCompletedOrder(true)
        }}
      >
        <CheckoutForm />
        <Summary />
      </form>

      {completedOrder && <CompletedOrder />}
    </div>
  )
}

export default CheckoutPage
