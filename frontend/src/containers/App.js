import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/layout/Navbar';

import IndexPage from '../containers/IndexPage';
import SignUpPage from '../containers/users/SignUpPage';
import SignInPage from '../containers/auth/SignInPage';
import FriendshipPage from '../containers/friendship/FriendshipPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <Router>
        <main>
          <Navbar loggedIn={loggedIn} />
          <Route path='/' exact component={() => <IndexPage />} />
          <Route path='/signup/' component={SignUpPage} />
          <Route path='/signin/' component={SignInPage} />
          <Route path='/friendship/' component={FriendshipPage} />
        </main>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  };
}

export default connect(mapStateToProps)(App);
