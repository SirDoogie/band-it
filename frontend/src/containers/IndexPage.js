import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LandingPage from '../containers/landing/LandingPage';


class IndexPage extends Component {
  constructor(props) {
    super(props);

    App.getClass = this.props.match.path
  }

  render() {
    return(
      <LandingPage />
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(IndexPage));