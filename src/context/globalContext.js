import React, { useContext, useState } from 'react'
import data from '../data/data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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
  const [showMenu, setShowMenu] = useState(false)
  const [storeData, setStoreData] = useState(data)

  return (
    <AppContext.Provider
      value={{ getCorrectImageForScreenSize, showMenu, setShowMenu, storeData }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
