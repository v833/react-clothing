import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CardIcon from '../../components/cart-icon/cart-icon.component'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../contexts/cart.context'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CardIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
