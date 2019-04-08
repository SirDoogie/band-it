import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '_reducers'
import { createLogger } from 'redux-logger'

export default function configureStore() {

  const logger = createLogger()
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger))

  if (module.hot) {
    module.hot.accept('../_reducers', () => {
      const nextRootReducer = require('../_reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}