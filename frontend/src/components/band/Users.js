import React, { Component } from 'react'
import DemoAvatar from '../../images/demo/avatar.png'

class Users extends Component {
  render() {
    return (
      <div className='profile-info'>
        <img src={DemoAvatar} className={'user-img'} />
        <div className='user-info'>
          <span className={'user-name'}>Nick</span>
          <span className={'user-type'}>(Guitar)</span>
        </div>
      </div>
    )
  }
}

export default Users
