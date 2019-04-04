import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import { authActions } from '../actions'

import PrivateRoute from '../helpers/PrivateRoute'
import Navigation from '../components/layout/Navigation'
import MusicPlayer from '../components/music/MusicPlayer'

import Landing from './landing/Landing'
import Confirmation from './confirmation/Confirmation'
import Profile from './profile/Profile'
import ProfileUpdate from './profile/ProfileUpdate'
import Feed from './feed/Feed'
import FriendsPage from './friends/FriendsPage'
import UsersPage from './users/UsersPage'


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { cookies } = this.props
    const user_id = cookies.get('user_id')
    if (user_id) {
      this.props.dispatch(authActions.getCurrentUser(user_id))
    }
  }

  render() {
    const loggedIn = this.props.loggedIn
    const currentUser = this.props.currentUser
    return (
      <main>
        <Navigation/>
        <Switch>
          <Route path='/' exact component={ Landing }/>
          <Route path='/confirmation/:token' exact component={ Confirmation }/>
          <PrivateRoute path='/feed' component={ Feed }/>
          <PrivateRoute path='/profile' exact component={ Profile }/>
          <PrivateRoute path='/profile/update' exact component={ ProfileUpdate }/>
          <PrivateRoute path='/friends' exact component={ FriendsPage }/>
          <PrivateRoute path='/friends/add' exact component={ UsersPage }/>
        </Switch>
        { currentUser.id &&
        <MusicPlayer/>
        }
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    currentUser: state.auth.currentUser
  }
}

export default withCookies(withRouter(connect(mapStateToProps)(App)))