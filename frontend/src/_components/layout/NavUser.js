import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Badge,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'
import {
  SearchIcon,
  HomeIcon,
  FriendsIcon,
  MessagesIcon,
  NotificationsIcon
} from '_assets/images'

import InlineSVG from 'svg-inline-react'

class NavUser extends Component {
  constructor(props) {
    super(props)

    this.toggleUserMenu = this.toggleUserMenu.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      userMenuOpen: false,
      searchValue: ''
    }
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value })
  }

  toggleUserMenu() {
    this.setState(prevState => ({
      userMenuOpen: !prevState.userMenuOpen
    }))
  }

  handleFormSubmit = () => {
    event.preventDefault()
    this.props.history.push({
      pathname: '/friends/add',
      state: { searchValue: this.state.searchValue }
    })
    this.setState({ searchValue: '' })
  }

  handleButtonPress = () => {
    this.handleFormSubmit()
  }

  handleKeyPress = event => {
    if (event.key == 'Enter') {
      this.handleFormSubmit()
    }
  }

  render() {
    const currentUser = this.props.currentUser

    const name =
      currentUser.profile.full_name != null
        ? currentUser.profile.full_name
        : currentUser.email

    return (
      <div className={'ml-auto d-flex align-items-center'}>
        <Form className={'form-inline'}>
          <InputGroup>
            <Input
              type="search"
              placeholder="Search"
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
              value={this.state.searchValue}
            />
            <InputGroupAddon addonType="append">
              <Button
                outline
                color="light"
                size="sm"
                onClick={this.handleButtonPress}
              >
                <InlineSVG src={SearchIcon} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <Nav navbar className={'primary-nav'}>
          <NavItem>
            <Link to={'/feed'} className="nav-link" activeClassName="active">
              <InlineSVG raw src={HomeIcon} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/friends" className="nav-link" activeclassname="active">
              <InlineSVG raw src={FriendsIcon} />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/conversations" className="nav-link">
              <InlineSVG raw src={MessagesIcon} />
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="#!">
              <InlineSVG raw src={NotificationsIcon} />
              <Badge color="primary" pill>
                1
              </Badge>
            </NavLink>
          </NavItem>
        </Nav>
        <Dropdown
          isOpen={this.state.userMenuOpen}
          toggle={this.toggleUserMenu}
          className={'navbar-user-menu'}
        >
          <DropdownToggle color={'link'} tag={'a'}>
            <img
              src={currentUser.profile.avatar_url}
              alt="Tony Stark"
              className={'user-photo'}
            />
            <span className={'user-name'}>{name}</span>
          </DropdownToggle>
          <DropdownMenu>
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem onClick={this.props.logout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default withRouter(NavUser)
