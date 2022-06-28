import React from 'react'
import './Header.module.css'
import hamburgerBtn from '../../assets/shared/tablet/icon-hamburger.svg'
import logo from '../../assets/shared/desktop/logo.svg'
import cart from '../../assets/shared/desktop/icon-cart.svg'

const Header = () => {
  return (
    <header>
      <div>
        <img src={hamburgerBtn} alt='menu_btn' />
      </div>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <img src={cart} alt='cart' />
      </div>
    </header>
  )
}

export default Header
