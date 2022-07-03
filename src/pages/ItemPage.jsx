import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Categories from '../components/Categories/Categories'
import Closing from '../components/ClosingSection/Closing'
import Features from '../components/Features/Features'
import Gallery from '../components/Gallery/Gallery'
import OtherProducts from '../components/OtherProducts/OtherProducts'
import StoreItem from '../components/StoreItem/StoreItem'
import { useGlobalContext } from '../context/globalContext'

const ItemPage = () => {
  const { storeData } = useGlobalContext()

  const category = useParams().category.toLowerCase()

  const selectedProduct = useParams().product.toLowerCase()

  const productData = storeData.find((product) => {
    return product.slug.toLowerCase() === selectedProduct
  })

  return (
    <div className='item_page'>
      <Link to={`/store/${category}`}>
        <p className='back_btn'>Go Back</p>
      </Link>
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
