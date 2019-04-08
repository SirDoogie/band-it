import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Intro from '_components/landing/Intro'
import JoinUs from '_components/landing/JoinUs'
import Subscribe from '_components/landing/Subscribe'
import Footer from '_components/landing/Footer'

class Landing extends Component {
  render() {
    const loggedIn = this.props.loggedIn

    return (
      <div>
        { loggedIn &&
        <Redirect to='/feed' />
        }
        { !loggedIn &&
        <div>
          <Intro/>
          <JoinUs/>
          <Subscribe/>
          <Footer/>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
  }
}


export default withRouter(connect(mapStateToProps)(Landing))