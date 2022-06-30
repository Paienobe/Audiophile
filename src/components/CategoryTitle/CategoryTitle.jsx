import React from 'react'
import styles from './CategoryTitle.module.css'

const CategoryTitle = ({ title }) => {
  return (
    <div className={styles.category_title}>
      <h1>{title.toUpperCase()}</h1>
    </div>
  )
}

export default CategoryTitle
