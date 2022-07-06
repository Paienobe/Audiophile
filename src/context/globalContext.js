import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import data from '../data/data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const getDataFromLocalStorage = () => {
    const requiredData = localStorage.getItem('cartData')
    if (requiredData) {
      return JSON.parse(localStorage.getItem('cartData'))
    } else {
      return []
    }
  }

  const [showMenu, setShowMenu] = useState(false)
  const [storeData, setStoreData] = useState(data)
  const [cartData, setCartData] = useState(getDataFromLocalStorage())
  const [showCart, setShowCart] = useState(false)
  const [completedOrder, setCompletedOrder] = useState(false)
  const [currentPage, setCurrentPage] = useState('HOME')

  const getCorrectImageForScreenSize = (
    mobileImage,
    tabImage,
    desktopImage
  ) => {
    let windowSize = window.innerWidth
    const chosenImage =
      windowSize < 640
        ? mobileImage
        : windowSize >= 640 && windowSize < 950
        ? tabImage
        : desktopImage
    return chosenImage
  }

  const emptyCart = () => {
    setCartData([])
  }

  useEffect(() => {
    if (showCart || completedOrder) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [showCart, completedOrder])

  const shippingFee = 50

  const vat = 599.8

  const cartTotal = cartData.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const grandTotal = (shippingFee + vat + cartTotal)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  const storeCartDataToLocalStorage = () => {
    localStorage.setItem('cartData', JSON.stringify(cartData))
  }

  useEffect(() => {
    storeCartDataToLocalStorage()
  }, [cartData])

  const closeCart = () => {
    setShowCart(false)
  }

  return (
    <AppContext.Provider
      value={{
        getCorrectImageForScreenSize,
        showMenu,
        setShowMenu,
        storeData,
        cartData,
        setCartData,
        showCart,
        setShowCart,
        emptyCart,
        grandTotal,
        cartTotal,
        shippingFee,
        vat,
        completedOrder,
        setCompletedOrder,
        currentPage,
        setCurrentPage,
        closeCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
