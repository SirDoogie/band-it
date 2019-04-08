import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { ActionsIcon } from '_assets/images'
import InlineSVG from 'svg-inline-react'

class FriendCard extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  handleRemove(id) {
    this.props.removeFriend(id)
  }

  render() {
    const user = this.props.user

    return (
      <div className='profile-card xs'>
        <div className='profile-photo'>

          <div className='profile-image'>
            <img src={ user.profile.avatar_url } alt='' className={ 'img-fluid' }/>
            <span className='presence-pill online'></span>
          </div>
        </div>
        <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle } className='profile-menu'>
          <DropdownToggle tag={ 'a' } className={ 'actions-toggle' }>
            <InlineSVG raw src={ ActionsIcon }/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Block</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem className={'text-danger'} onClick={this.handleRemove.bind(this, user.id)}>Remove</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className='profile-name'>
          <p className={ 'full-name' }>{ user.profile.full_name }</p>
          <p className='band-name'>Fly DeLorean Band</p>
        </div>
        <div className='profile-actions'>
          <a href='#' className='btn btn-link btn-sm w-100' id='send-message'>Send message</a>
        </div>
      </div>
    )
  }
}

export default FriendCard