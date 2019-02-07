import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from '../components/layout/Navbar'

import IndexPage from '../containers/IndexPage';
import SignUpPage from '../containers/users/SignUpPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path='/' exact component={IndexPage} />
          <Route path='/signup/' component={SignUpPage} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)