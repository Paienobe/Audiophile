import React from 'react'
import heroImage from '../../assets/home/mobile/image-header.jpg'
import heroImageTab from '../../assets/home/tablet/image-header.jpg'
import heroImageDesktop from '../../assets/home/desktop/image-hero.jpg'
import styles from './HeroSection.module.css'
import { useGlobalContext } from '../../context/globalContext'

const HeroSection = () => {
  const { getCorrectImageForScreenSize } = useGlobalContext()
  return (
    <section className={styles.hero_section}>
      <div className={styles.text_container}>
        <p>NEW PRODUCT</p>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className='btn'>SEE PRODUCT</button>
      </div>

      <div className='image_container'>
        <img
          src={getCorrectImageForScreenSize(
            heroImage,
            heroImageTab,
            heroImageDesktop
          )}
          alt='hero_image'
          className={styles.hero_img}
        />
      </div>
    </section>
  )
}

export default HeroSection
