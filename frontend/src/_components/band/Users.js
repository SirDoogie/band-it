import React, { Component } from 'react'
import DemoAvatar from '_assets/images/demo/avatar.png'

class Users extends Component {
  render() {
    const user = this.props.user

    return (
      <div className='profile-info'>
        <img src={user.profile.avatar_url} alt={user.full_name} className={'user-img'} />
        <div className='user-info'>
          <span className={'user-name'}>{ user.profile.first_name }</span>
          <span className={'user-type'}>(Guitar)</span>
        </div>
      </div>
    )
  }
}

export default Users
