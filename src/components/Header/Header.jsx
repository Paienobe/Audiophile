import React, { useState } from 'react'
import styles from './Header.module.css'
import hamburgerBtn from '../../assets/shared/tablet/icon-hamburger.svg'
import { CgClose } from 'react-icons/cg'
import logo from '../../assets/shared/desktop/logo.svg'
import cart from '../../assets/shared/desktop/icon-cart.svg'
import Categories from '../Categories/Categories'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pages = ['HOME', 'HEADPHONES', 'SPEAKERS', 'EARPHONES']

  return (
    <header>
      {window.innerWidth < 950 && (
        <div
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          {!showMenu ? (
            <img src={hamburgerBtn} alt='menu_btn' />
          ) : (
            <CgClose size={23} style={{ color: 'white' }} />
          )}
        </div>
      )}

      <div>
        <img src={logo} alt='logo' />
      </div>

      <nav>
        {pages.map((page) => {
          return <Link to='/'>{page}</Link>
        })}
      </nav>

      <div className={styles.cart_container}>
        <img src={cart} alt='cart' />
      </div>

      <div
        className={styles.mobile_menu_container}
        style={showMenu ? { top: '5.5rem' } : {}}
      >
        <Categories />
      </div>
      {window.innerWidth >= 950 && <hr />}
    </header>
  )
}

export default Header
