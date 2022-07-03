import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { useParams } from 'react-router-dom'
import CategoryTitle from '../components/CategoryTitle/CategoryTitle'
import uuid from 'react-uuid'
import StoreItem from '../components/StoreItem/StoreItem'
import Categories from '../components/Categories/Categories'
import Closing from '../components/ClosingSection/Closing'

const CategoryPage = () => {
  const { storeData } = useGlobalContext()

  const selectedCategory = useParams().category.toLowerCase()

  const storeItemsForSelectedCategory = storeData.filter((item) => {
    return item.category.toLowerCase() === selectedCategory.toLowerCase()
  })

  return (
    <>
      <CategoryTitle title={selectedCategory} />
      <div className='store_item_container'>
        {storeItemsForSelectedCategory.map((item) => {
          return <StoreItem key={uuid()} {...item} />
        })}
      </div>
      <Categories />
      <Closing />
    </>
  )
}

export default CategoryPage
