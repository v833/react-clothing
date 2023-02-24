import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'

// curry
const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('store: ', store)
  if (!action.type) {
    return next(action)
  }
  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currnetState', store.getState())

  next(action)

  console.log('next state: ', store.getState())
}

const middleWares = [logger, thunk].filter(Boolean)

const composeEnhancers = compose(applyMiddleware(...middleWares))

// root-reducer
export const store = createStore(rootReducer, undefined, composeEnhancers)
