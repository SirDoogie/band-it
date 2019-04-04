import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import history from '../helpers/history'

export default function configureStore() {

  const logger = createLogger()
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger, routerMiddleware(history)))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}