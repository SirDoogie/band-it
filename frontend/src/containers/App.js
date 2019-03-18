import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navigation from '../components/layout/Navigation'

import IndexPage from './Home'
import Profile from './profile/Profile'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const loggedIn = this.props.loggedIn
    return (
      <Router>
        <main>
          <Navigation loggedIn={ loggedIn }/>
          <Route path='/' exact component={ () => <IndexPage/> }/>
          <Route path='/feed/' component={ Profile }/>
        </main>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps)(App)