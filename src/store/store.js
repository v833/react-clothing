import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

// root-reducer
export const store = createStore(rootReducer, undefined, composeEnhancers)
