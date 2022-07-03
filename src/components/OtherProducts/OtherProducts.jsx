import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { otherProductsImages } from './imports_and_assets'
import uuid from 'react-uuid'
import styles from './OtherProducts.module.css'
import { Link } from 'react-router-dom'

const OtherProducts = ({ image, others }) => {
  const { getCorrectImageForScreenSize } = useGlobalContext()

  const displayImagesForOtherProducts = otherProductsImages[image].map(
    (images) => {
      return getCorrectImageForScreenSize(images[0], images[1], images[2])
    }
  )
  return (
    <div>
      <h2 className={styles.section_title}>YOU MAY ALSO LIKE</h2>
      <div className={styles.product_container}>
        {displayImagesForOtherProducts.map((picture, index) => {
          return (
            <div key={uuid()} className={styles.product_item}>
              <img src={picture} alt='product_image' />
              <h3>{others[index].name.toUpperCase()}</h3>
              <Link
                to={`/store/${
                  others[index].slug.includes('headphones')
                    ? 'headphones'
                    : 'speakers'
                }/${others[index].slug}`}
              >
                <button>SEE PRODUCT</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OtherProducts
