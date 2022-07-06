import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Categories from '../components/Categories/Categories'
import Closing from '../components/ClosingSection/Closing'
import Features from '../components/Features/Features'
import Gallery from '../components/Gallery/Gallery'
import OtherProducts from '../components/OtherProducts/OtherProducts'
import StoreItem from '../components/StoreItem/StoreItem'
import { useGlobalContext } from '../context/globalContext'
import { useLocation } from 'react-router-dom'

const ItemPage = () => {
  const { storeData } = useGlobalContext()

  const selectedProduct = useParams().product.toLowerCase()

  const productData = storeData.find((product) => {
    return product.slug.toLowerCase() === selectedProduct
  })

  const navigate = useNavigate()

  const pathName = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  useEffect(() => {
    console.log(pathName)
  }, [])

  return (
    <div className='item_page'>
      <p
        className='back_btn'
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </p>

      <div className='item_page_content_container'>
        <StoreItem {...productData} />
        <Features {...productData} />
        <Gallery {...productData} />
        <OtherProducts {...productData} />
      </div>
      <Categories />
      <Closing />
    </div>
  )
}

export default ItemPage
