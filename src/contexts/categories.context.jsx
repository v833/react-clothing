import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

// import SHOP_DATA from '../shop-data.js'
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log('categoryMap', categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  const value = { categoriesMap }
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
