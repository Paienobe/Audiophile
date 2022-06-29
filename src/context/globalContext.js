import React, { useContext, useState } from 'react'

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

  return (
    <AppContext.Provider value={{ getCorrectImageForScreenSize }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
