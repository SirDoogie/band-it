import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '_reducers'
import { helloSaga } from './sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(helloSaga)
  const action = type => store.dispatch({ type })
  if (module.hot) {
    module.hot.accept('../_reducers', () => {
      const nextRootReducer = require('../_reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
