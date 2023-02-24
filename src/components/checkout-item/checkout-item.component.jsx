// import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

// import { CartContext } from '../../contexts/cart.context'

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  // const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => clearItemFromCart(cartItems, cartItem)
  const addItemHandler = () => addItemToCart(cartItems, cartItem)
  const removeItemHandler = () => removeItemToCart(cartItems, cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
