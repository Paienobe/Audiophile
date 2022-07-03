import React from 'react'
import styles from './Features.module.css'
import uuid from 'react-uuid'

const Features = ({ features, includes }) => {
  return (
    <div>
      <div className={styles.features_section}>
        <div className={styles.features_text}>
          <h3>FEATURES</h3>
          <p>{features}</p>
        </div>

        <div className={styles.box_content}>
          <h3>IN THE BOX</h3>
          <div>
            {includes.map((item) => {
              return (
                <p key={uuid()}>
                  <span>{item.quantity}x</span>
                  {'  '} {item.item}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
