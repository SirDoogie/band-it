import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import configureStore from './store/configureStore'
import history from './helpers/history'

import App from './containers/App'

const store = configureStore()

ReactDOM.render(
  <CookiesProvider>
    <Provider store={ store }>
      <Router history={ history }>
        <App/>
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById('app')
)

module.hot.accept()