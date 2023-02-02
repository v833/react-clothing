import { useEffect } from 'React'
import { getRedirectResult } from 'firebase/auth'

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth
  // signInWithGoogleRedict
} from '../../utils/firebase/firebase.utils'

import SignInForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth)
      if (response) {
        await createUserDocumentFromAuth(response.user)
      }
    }
    fetchData()
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log('userDocRef: ', userDocRef)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignInForm />
      {/* <button onClick={signInWithGoogleRedict}>Sign in with Google Redict</button> */}
    </div>
  )
}

export default SignIn
