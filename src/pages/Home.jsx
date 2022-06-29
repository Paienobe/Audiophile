import React from 'react'
import Categories from '../components/Categories/Categories'
import Closing from '../components/ClosingSection/Closing'
import HeroSection from '../components/HeroSection/HeroSection'
import Samples from '../components/Samples/Samples'

const Home = () => {
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
