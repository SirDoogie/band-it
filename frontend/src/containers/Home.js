import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Landing from './landing/Landing';
import Profile from './profile/Profile'

class Home extends Component {
  render() {
    const loggedIn = this.props.loggedIn;
    return(
      loggedIn ? (<Profile/>) : (<Landing/>)
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(Home));