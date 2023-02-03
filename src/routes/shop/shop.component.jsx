import SHOP_DATA from '../../shop-data.json'
import './shop.styles.scss'

const Shop = () => {
  return (
    <div className='products-container'>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Shop
