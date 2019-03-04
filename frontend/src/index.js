import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/App';
import Footer from './components/layout/Footer';


import configureStore from './store/configureStore';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Footer/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();