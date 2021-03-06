import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useGlobalContext } from '../../context/globalContext'
const Footer = () => {
  const { setCurrentPage } = useGlobalContext()
  const pages = [
    { name: 'HOME', link: '/' },
    { name: 'HEADPHONES', link: '/store/headphones' },
    { name: 'SPEAKERS', link: '/store/speakers' },
    { name: 'EARPHONES', link: '/store/earphones' },
  ]
  return (
    <footer>
      <div className={styles.footer_top}>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        <div className={styles.page_list}>
          {pages.map((page) => {
            return (
              <Link
                to={page.link}
                key={uuid()}
                onClick={() => setCurrentPage(page.name)}
              >
                {page.name}
              </Link>
            )
          })}
        </div>
      </div>

      <p>
        Audiophile is an all in one step to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <p className={styles.copyright}>
        Copyright {new Date().getFullYear()}. All Rights Reserved
      </p>

      <div className={styles.socials}>
        <a href=''>
          <FaFacebook size={30} />
        </a>
        <a href=''>
          <FaTwitter size={30} />
        </a>
        <a href=''>
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
