import React, { Component } from 'react'
import { Nav, NavItem, NavLink, Form, Input, InputGroup, InputGroupAddon, Button, Badge, Dropdown, DropdownToggle,
         DropdownMenu, DropdownItem } from 'reactstrap'
import { SearchIcon, HomeIcon, FriendsIcon, MessagesIcon, NotificationsIcon, DemoAvatar } from '../../images'
import InlineSVG from 'svg-inline-react'

class NavUser extends Component {
  constructor(props) {
    super(props)

    this.toggleUserMenu = this.toggleUserMenu.bind(this)
    this.state = {
      userMenuOpen: false
    }
  }

  toggleUserMenu() {
    this.setState(prevState => ({
      userMenuOpen: !prevState.userMenuOpen
    }))
  }

  render() {
    return (
      <div className={ 'ml-auto d-flex align-items-center' }>
        <Form className={ 'form-inline' }>
          <InputGroup>
            <Input type='search' placeholder='Search'/>
            <InputGroupAddon addonType='append'>
              <Button outline color='light'>
                <InlineSVG src={ SearchIcon }/>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <Nav navbar className={ 'primary-nav' }>
          <NavItem>
            <NavLink href='#!'>
              <InlineSVG src={ HomeIcon }/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#!'>
              <InlineSVG src={ FriendsIcon }/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#!'>
              <InlineSVG src={ MessagesIcon }/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#!'>
              <InlineSVG src={ NotificationsIcon }/>
              <Badge color='primary' pill>1</Badge>
            </NavLink>
          </NavItem>
        </Nav>
        <Dropdown isOpen={ this.state.userMenuOpen } toggle={ this.toggleUserMenu } className={ 'navbar-user-menu' }>
          <DropdownToggle color={ 'link' } tag={ 'a' }>
            <img src={ DemoAvatar } alt='Tony Stark' className={ 'user-photo' }/>
            <span className={ 'user-name' }>Tony Stark</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default NavUser