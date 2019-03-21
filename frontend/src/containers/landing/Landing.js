import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Intro from '../../components/landing/Intro'
import JoinUs from '../../components/landing/JoinUs'
import Subscribe from '../../components/landing/Subscribe'
import Footer from '../../components/layout/Footer'

class Landing extends Component {
  render() {
    const loggedIn = this.props.loggedIn

    return (
      <div>
        { !loggedIn &&
        <div>
          <Intro/>
          <JoinUs/>
          <Subscribe/>
          <Footer/>
        </div>
        }
        { loggedIn &&
        <Redirect to='/feed' />
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