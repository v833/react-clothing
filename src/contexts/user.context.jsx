import { useEffect, useState, createContext } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    // 清理函数, 下一次执行前或销毁时执行
    return unsubcribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
