import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styles from './StoreItem.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { categoryImages, actualProductImage } from './imports_and_assets'
import { useState } from 'react'

const StoreItem = ({ name, image, description, new: isNew, slug, price }) => {
  const { getCorrectImageForScreenSize, cartData, setCartData } =
    useGlobalContext()

  const category = useParams().category.toLowerCase()

  const [itemQuantity, setItemQuantity] = useState(1)

  const increaseItemQuantity = () => {
    setItemQuantity(itemQuantity + 1)
  }

  const decreaseItemQuantity = () => {
    if (itemQuantity === 1) {
      setItemQuantity(1)
    } else {
      setItemQuantity(itemQuantity - 1)
    }
  }

  const addItemToCart = () => {
    const checkIfItemIsAlreadyInCart = cartData.find((item) => {
      return item.name === name
    })

    if (!checkIfItemIsAlreadyInCart) {
      setCartData([...cartData, { name, price, quantity: itemQuantity, image }])
    } else {
      const updatedCartData = cartData.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + itemQuantity }
        } else {
          return item
        }
      })
      setCartData(updatedCartData)
    }
  }

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
                <button onClick={decreaseItemQuantity}>-</button>
                <p>{itemQuantity}</p>
                <button onClick={increaseItemQuantity}>+</button>
              </div>
              <button onClick={addItemToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StoreItem
