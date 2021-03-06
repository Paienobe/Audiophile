import React from 'react'
import speakerImage from '../../assets/shared/desktop/image-speakers.png'
import headphoneImage from '../../assets/shared/desktop/image-headphones.png'
import earphoneImage from '../../assets/shared/desktop/image-earphones.png'
import styles from './Categories.module.css'
import uuid from 'react-uuid'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'

const Categories = () => {
  const categories = [
    { name: 'HEADPHONES', image: headphoneImage },
    { name: 'SPEAKERS', image: speakerImage },
    { name: 'EARPHONES', image: earphoneImage },
  ]
  const { showMenu, setShowMenu } = useGlobalContext()
  return (
    <div className={styles.categories_container}>
      {categories.map((item) => {
        return (
          <div className={styles.category_item} key={uuid()}>
            <div className={styles.category_image_container}>
              <img
                src={item.image}
                alt='category_image'
                className={styles.category_image}
              />
            </div>
            <h3 className={styles.category_name}>{item.name}</h3>
            <Link
              to={`/store/${item.name.toLowerCase()}`}
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <div className={styles.btn}>
                <p>SHOP</p>
                <FaAngleRight size={20} style={{ color: '#d87d4a' }} />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
