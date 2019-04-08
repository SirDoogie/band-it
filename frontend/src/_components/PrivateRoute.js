import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route { ...rest } render={ props => (
    auth.loggedIn
      ? <Component { ...props } />
      : <Redirect to={ { pathname: '/', state: { from: props.location } } }/>
  ) }/>
)

const mapStateToProps = (state) => ({ auth: state.auth })
export default withRouter(connect(mapStateToProps)(PrivateRoute))