import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { CartProvider } from './contexts/cart.context'
// import { CategoriesProvider } from './contexts/categories.context'
// import { UserProvider } from './contexts/user.context'
import './index.scss'
import reportWebVitals from './reportWebVitals'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
