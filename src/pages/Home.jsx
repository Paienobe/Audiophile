import React, { useEffect } from 'react'
import Categories from '../components/Categories/Categories'
import Closing from '../components/ClosingSection/Closing'
import HeroSection from '../components/HeroSection/HeroSection'
import Samples from '../components/Samples/Samples'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const pathName = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])
  return (
    <>
      <HeroSection />
      <Categories />
      <Samples />
      <Closing />
    </>
  )
}

export default Home
