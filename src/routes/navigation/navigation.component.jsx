import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log('currentUser: ', currentUser)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

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
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
