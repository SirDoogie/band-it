import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import { authActions } from '_actions'
import PrivateRoute from '_components/PrivateRoute'
import Navigation from '_components/layout/Navigation'
import MusicPlayer from '_components/music/MusicPlayer'
import Landing from 'Landing/LandingPage'
import Confirmation from 'Confirmation/Confirmation'
import Profile from 'Users/Profile'
import ProfileUpdate from 'Users/ProfileEdit'
import Feed from 'Feed/Feed'
import FriendsPage from 'Friends/FriendsPage'
import UsersPage from 'Users/UsersPage'
import ChatPage from 'Chat/ChatPage'

class App extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(email, password) {
    this.props.dispatch(authActions.login(email, password))
  }

  logout() {
    this.props.dispatch(authActions.logout())
  }

  componentDidMount() {
    const { cookies } = this.props
    const user_id = cookies.get('user_id')
    if (user_id) {
      this.props.dispatch(authActions.getCurrentUser(user_id))
    }
  }

  render() {
    const currentUser = this.props.currentUser
    return (
      <main>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/confirmation/:token' exact component={Confirmation} />
          <PrivateRoute
            path='/feed'
            component={() => <Feed cookies={this.props.cookies} />}
          />
          <PrivateRoute
            path='/profile'
            exact
            component={() => <Profile cookies={this.props.cookies} />}
          />
          <PrivateRoute
            path='/profile/update'
            exact
            component={ProfileUpdate}
          />
          <PrivateRoute path='/friends' exact component={FriendsPage} />
          <PrivateRoute path='/friends/add' exact component={UsersPage} />
          <PrivateRoute path='/conversations' exact component={ChatPage} />
        </Switch>
        {currentUser.id && <MusicPlayer />}
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
