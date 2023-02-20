import { Routes, Route } from 'react-router-dom'
import Category from '../../components/category/category.component'
import CategoriesPreview from '../categories-preview/categories-preview.component'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  )
}

export default Shop
