import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.loggedIn ? (
        <Component {...props} />
      ) : auth.loading === false ? (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ) : (
        <div>Loading</div>
      )
    }
  />
)

const mapStateToProps = state => ({ auth: state.auth })
export default withRouter(connect(mapStateToProps)(PrivateRoute))
