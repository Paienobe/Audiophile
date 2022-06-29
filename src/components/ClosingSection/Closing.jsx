import React from 'react'
import closingImage from '../../assets/shared/mobile/image-best-gear.jpg'
import closingImageTab from '../../assets/shared/tablet/image-best-gear.jpg'
import closingImageDesktop from '../../assets/shared/desktop/image-best-gear.jpg'
import { useGlobalContext } from '../../context/globalContext'
import styles from './Closing.module.css'

const Closing = () => {
  const { getCorrectImageForScreenSize } = useGlobalContext()
  return (
    <section className={styles.closing_section}>
      <div className={styles.closing_image_container}>
        <img
          src={getCorrectImageForScreenSize(
            closingImage,
            closingImageTab,
            closingImageDesktop
          )}
          alt='man with headphones'
        />
      </div>
      <div className={styles.closing_text}>
        <h2>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City. Audiophile is the premier store
          for high end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}

export default Closing
