import React, { useState } from 'react'
import styles from './Header.module.css'
import hamburgerBtn from '../../assets/shared/tablet/icon-hamburger.svg'
import { CgClose } from 'react-icons/cg'
import logo from '../../assets/shared/desktop/logo.svg'
import cart from '../../assets/shared/desktop/icon-cart.svg'
import Categories from '../Categories/Categories'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { useGlobalContext } from '../../context/globalContext'
import Cart from '../Cart/Cart'

const Header = () => {
  const pages = ['HOME', 'HEADPHONES', 'SPEAKERS', 'EARPHONES']
  const {
    showMenu,
    setShowMenu,
    showCart,
    setShowCart,
    cartData,
    currentPage,
    setCurrentPage,
  } = useGlobalContext()

  const numberOfItemInCart = cartData?.reduce((currentTotal, item) => {
    return item.quantity + currentTotal
  }, 0)

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

      <Link to='/'>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </Link>

      {window.innerWidth >= 950 && (
        <nav>
          {pages.map((page) => {
            return (
              <Link
                to={
                  page.toLowerCase() === 'home'
                    ? '/'
                    : `/store/${page.toLowerCase()}`
                }
                key={uuid()}
                style={currentPage === page ? { color: '#d87c4a' } : {}}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Link>
            )
          })}
        </nav>
      )}

      <div
        className={styles.cart_container}
        onClick={() => {
          setShowCart(true)
        }}
        style={{ cursor: 'pointer' }}
      >
        {numberOfItemInCart > 0 && (
          <p className={styles.item_count}>{numberOfItemInCart}</p>
        )}
        <img src={cart} alt='cart' />
      </div>

      <div
        className={styles.mobile_menu_container}
        style={showMenu ? { top: '5.5rem' } : {}}
      >
        <Categories />
      </div>

      {showCart && <Cart />}

      {window.innerWidth >= 950 && <hr />}
    </header>
  )
}

export default Header
