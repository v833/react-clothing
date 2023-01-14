import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD20JFbAkRkGQRERM45O0sRBUfW-vcpgfc',
  authDomain: 'react-clothing-db-360aa.firebaseapp.com',
  projectId: 'react-clothing-db-360aa',
  storageBucket: 'react-clothing-db-360aa.appspot.com',
  messagingSenderId: '654092988193',
  appId: '1:654092988193:web:9fad7d530187aec3751860'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.error('Error creating user', error.message)
    }
  }
  return userDocRef
}
