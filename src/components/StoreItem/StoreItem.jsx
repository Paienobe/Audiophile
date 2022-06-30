import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styles from './StoreItem.module.css'
import { useParams } from 'react-router-dom'

// earphone images
import earphoneImageMobile from '../../assets/category-earphones/mobile/image-yx1-earphones.jpg'
import earphoneImageTablet from '../../assets/category-earphones/tablet/image-yx1-earphones.jpg'
import earphoneImageDesktop from '../../assets/category-earphones/desktop/image-yx1-earphones.jpg'

// headphone images
import headphoneImageOneMobile from '../../assets/category-headphones/mobile/image-xx59.jpg'
import headphoneImageOneTablet from '../../assets/category-headphones/tablet/image-xx59.jpg'
import headphoneImageOneDesktop from '../../assets/category-headphones/desktop/image-xx59.jpg'
import headphoneImageTwoMobile from '../../assets/category-headphones/mobile/image-xx99-mark-one.jpg'
import headphoneImageTwoTablet from '../../assets/category-headphones/tablet/image-xx99-mark-one.jpg'
import headphoneImageTwoDesktop from '../../assets/category-headphones/desktop/image-xx99-mark-one.jpg'
import headphoneImageThreeMobile from '../../assets/category-headphones/mobile/image-xx99-mark-two.jpg'
import headphoneImageThreeTablet from '../../assets/category-headphones/tablet/image-xx99-mark-two.jpg'
import headphoneImageThreeDesktop from '../../assets/category-headphones/desktop/image-xx99-mark-two.jpg'

// speaker images
import speakerImageOneMobile from '../../assets/category-speakers/mobile/image-zx7.jpg'
import speakerImageOneTablet from '../../assets/category-speakers/tablet/image-zx7.jpg'
import speakerImageOneDesktop from '../../assets/category-speakers/desktop/image-zx7.jpg'
import speakerImageTwoMobile from '../../assets/category-speakers/mobile/image-zx7.jpg'
import speakerImageTwoTablet from '../../assets/category-speakers/tablet/image-zx7.jpg'
import speakerImageTwoDesktop from '../../assets/category-speakers/desktop/image-zx7.jpg'

const StoreItem = ({ name, image, description, new: isNew }) => {
  const { getCorrectImageForScreenSize } = useGlobalContext()
  const itemImageToBeDisplayed =
    image === 'yx1-earphones-pictures'
      ? getCorrectImageForScreenSize(
          earphoneImageMobile,
          earphoneImageTablet,
          earphoneImageDesktop
        )
      : image === 'xx59-headphones-pictures'
      ? getCorrectImageForScreenSize(
          headphoneImageOneMobile,
          headphoneImageOneTablet,
          headphoneImageOneDesktop
        )
      : image === 'xx99-mark-one-headphones-pictures'
      ? getCorrectImageForScreenSize(
          headphoneImageTwoMobile,
          headphoneImageTwoTablet,
          headphoneImageTwoDesktop
        )
      : image === 'xx99-mark-two-headphones-pictures'
      ? getCorrectImageForScreenSize(
          headphoneImageThreeMobile,
          headphoneImageThreeTablet,
          headphoneImageThreeDesktop
        )
      : image === 'zx7-speaker-pictures'
      ? getCorrectImageForScreenSize(
          speakerImageOneMobile,
          speakerImageOneTablet,
          speakerImageOneDesktop
        )
      : getCorrectImageForScreenSize(
          speakerImageTwoMobile,
          speakerImageTwoTablet,
          speakerImageTwoDesktop
        )
  return (
    <div className={styles.store_item}>
      <div className={styles.image_container}>
        <img src={itemImageToBeDisplayed} alt='product_image' />
      </div>

      <p>{isNew && 'NEW PROJECT'}</p>
      <h2>{name.toUpperCase()}</h2>
      <p>{description}</p>
      <button>SEE PRODUCT</button>
    </div>
  )
}

export default StoreItem
