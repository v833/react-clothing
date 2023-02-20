import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../product-card/product-card.component'
import { CategoryContainer, Title } from './category.styles'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  // const products = categoriesMap[category]
  // 当依赖项改变时, 重新渲染
  const [products, setProducts] = useState(categoriesMap[category])
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <Title>{category}</Title>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </>
  )
}

export default Category
