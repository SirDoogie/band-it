import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import Navbar from '../components/layout/Navbar'

import IndexPage from '../containers/IndexPage';
import SignUpPage from '../containers/users/SignUpPage';
import SignInPage from '../containers/auth/SignInPage';

class App extends Component {
  constructor(props) {
    super(props);

    App.getClass = App.getClass.bind(this)
  }

  static getClass(path) {
    console.log(path)
  }

  render() {
    const loggedIn = this.props.loggedIn;


    return (
      <Router>
        <div className={loggedIn ? 'wrapper': 'landing'}>
          <Navbar loggedIn={loggedIn}/>
          <Route path='/' exact component={() => <IndexPage getClass={App.getClass} />} />
          <Route path='/signup/' component={SignUpPage} />
          <Route path='/signin/' component={SignInPage} />
        </div>
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