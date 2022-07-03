import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styles from './StoreItem.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { categoryImages, actualProductImage } from './imports_and_assets'

const StoreItem = ({ name, image, description, new: isNew, slug, price }) => {
  const { getCorrectImageForScreenSize } = useGlobalContext()

  const category = useParams().category.toLowerCase()

  return (
    <>
      {!useParams().product ? (
        <div className={styles.store_item}>
          <div className={styles.image_container}>
            <img
              src={getCorrectImageForScreenSize(
                categoryImages[image][0],
                categoryImages[image][1],
                categoryImages[image][2]
              )}
              alt='product_image'
            />
          </div>
          <div className={styles.text_container}>
            <p className={styles.new_product}>{isNew && 'NEW PRODUCT'}</p>
            <h2>{name.toUpperCase()}</h2>
            <p>{description}</p>
            <Link to={`/store/${category}/${slug.toLowerCase()}`}>
              <button>SEE PRODUCT</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={(styles.store_item, styles.product_details)}>
          <div className={styles.image_container}>
            <img
              src={getCorrectImageForScreenSize(
                actualProductImage[image][0],
                actualProductImage[image][1],
                actualProductImage[image][2]
              )}
              alt='product_image'
            />
          </div>
          <div
            className={(styles.text_container, styles.product_text_container)}
          >
            <p className={styles.new_product}>{isNew && 'NEW PRODUCT'}</p>
            <h2>{name?.toUpperCase()}</h2>
            <p>{description}</p>
            <h3 className={styles.price}>${price}</h3>
            <div className={styles.button_container}>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StoreItem
