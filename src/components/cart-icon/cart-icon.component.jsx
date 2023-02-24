import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'

// import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
