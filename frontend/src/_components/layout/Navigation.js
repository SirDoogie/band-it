import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Logo } from '_assets/images'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { authActions } from '_actions'
import NavLanding from './NavLanding'
import NavUser from './NavUser'

library.add(faFacebookF, faInstagram, faTwitter)

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      isOpen: false
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  login(email, password) {
    this.props.dispatch(authActions.login(email, password))
  }

  logout() {
    this.props.dispatch(authActions.logout())
  }

  render() {
    const loggedIn = this.props.loggedIn
    const currentUser = this.props.currentUser

    const navClass = loggedIn
      ? 'navbar-main bg-dark fixed-top'
      : 'navbar-dark navbar-landing'
    return (
      <header>
        <Navbar dark expand="lg" className={navClass}>
          <Container>
            <Link to="/">
              <NavbarBrand>
                <img
                  src={Logo}
                  alt="Band-It"
                  className={'d-inline-block align-top'}
                />
              </NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <Collapse isOpen={!this.state.isOpen} navbar>
              <Nav navbar className={'social-nav'}>
                <NavItem>
                  <NavLink href="#!">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#!">
                    <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#!">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                </NavItem>
              </Nav>
              {loggedIn && currentUser.id ? (
                <NavUser currentUser={currentUser} logout={this.logout} />
              ) : (
                <NavLanding login={this.login} />
              )}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    currentUser: state.auth.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))
