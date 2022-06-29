import React from 'react'
import speaker1 from '../../assets/home/mobile/image-speaker-zx9.png'
import speaker1Tab from '../../assets/home/tablet/image-speaker-zx9.png'
import speaker1Desktop from '../../assets/home/desktop/image-speaker-zx9.png'
import speaker2 from '../../assets/home/mobile/image-speaker-zx7.jpg'
import speaker2Tab from '../../assets/home/tablet/image-speaker-zx7.jpg'
import speaker2Desktop from '../../assets/home/desktop/image-speaker-zx7.jpg'
import earpiece from '../../assets/home/mobile/image-earphones-yx1.jpg'
import earpieceTab from '../../assets/home/tablet/image-earphones-yx1.jpg'
import earpieceDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg'
import { useGlobalContext } from '../../context/globalContext'
import styles from './Samples.module.css'

const Samples = () => {
  const { getCorrectImageForScreenSize } = useGlobalContext()
  return (
    <section className={styles.samples_container}>
      <div className={styles.sample_one}>
        <div className={styles.sample_one_image_container}>
          <img
            src={getCorrectImageForScreenSize(
              speaker1,
              speaker1Tab,
              speaker1Desktop
            )}
            alt='speaker image'
            className={styles.sample_image}
          />
        </div>
        <div className={styles.sample_one_text}>
          <h2>
            ZX9 <br /> SPEAKER
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        </div>

        <button className={styles.sample_one_btn}>SEE PRODUCT</button>
      </div>

      <div className={styles.sample_two}>
        <div className={styles.sample_two_text}>
          <h2>ZX7 SPEAKER</h2>
          <button className={styles.sample_btn}>SEE PRODUCT</button>
        </div>
        <div className={styles.sample_two_image_container}>
          <img
            src={getCorrectImageForScreenSize(
              speaker2,
              speaker2Tab,
              speaker2Desktop
            )}
            alt='speaaker image'
          />
        </div>
      </div>

      <div className={styles.sample_three}>
        <div className={styles.sample_three_image_container}>
          <img
            src={getCorrectImageForScreenSize(
              earpiece,
              earpieceTab,
              earpieceDesktop
            )}
            alt='earphone image'
          />
        </div>
        <div className={styles.sample_three_text}>
          <h2>YX1 EARPHONES</h2>
          <button className={styles.sample_btn}>SEE PRODUCT</button>
        </div>
      </div>
    </section>
  )
}

export default Samples
