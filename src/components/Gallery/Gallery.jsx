import React from 'react'
import styles from './Gallery.module.css'
import uuid from 'react-uuid'
import { galleryImages } from './imports_and_assets'
import { useGlobalContext } from '../../context/globalContext'

const Gallery = ({ image }) => {
  const { getCorrectImageForScreenSize } = useGlobalContext()

  const galleryImageForSelectedProducts = galleryImages[image].map((images) => {
    return getCorrectImageForScreenSize(images[0], images[1], images[2])
  })

  return (
    <div className={styles.gallery}>
      {galleryImageForSelectedProducts.map((picture) => {
        return (
          <img
            src={picture}
            alt='gallery_image'
            key={uuid()}
            className={styles.gallery_image}
          />
        )
      })}
    </div>
  )
}

export default Gallery
