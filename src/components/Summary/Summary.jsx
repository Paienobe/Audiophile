import React from 'react'
import styles from './Summary.module.css'

const Summary = () => {
  return (
    <div className={styles.summary}>
      <h2>SUMMARY</h2>
      <div></div>
      <div>
        <p>TOTAL</p>
        <p>SHIPPING</p>
        <p>VAT (INCLUDED)</p>
      </div>
      <div>
        <p>GRAND TOTAL</p>
      </div>
      <button>CONTINUE & PAY</button>
    </div>
  )
}

export default Summary
