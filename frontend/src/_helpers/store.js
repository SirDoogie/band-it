import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '_reducers'
import { createLogger } from 'redux-logger'
import rootSaga from './sagas'

export default function configureStore() {
  const logger = createLogger()
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../_reducers', () => {
      const nextRootReducer = require('../_reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
