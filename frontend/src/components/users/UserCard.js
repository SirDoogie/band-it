import React, { Component } from 'react'
import { Card } from 'reactstrap'

class UserCard extends Component {
  render() {
    const user = this.props.user

    return(
      <Card body className={'user-card'}>
        <div className='user-photo'>
          <div className='user-image'>
            <img src={ user.profile.avatar_url } alt={ user.profile.full_name } className={ 'img-fluid' }/>
            <span className='presence-pill online'></span>
          </div>
        </div>
        <div className='user-name'>
          <span className='full-name'>{ user.profile.full_name }</span>
          <span className='band-name'>Fly DeLorean Band</span>
          <span className='status'>Looking for band</span>
        </div>
        <div className='user-info'>
          <ul>
            <li>Guitar (4), Drums (3)</li>
            <li>Genre: </li>
            <li>Education:</li>
            <li>Distance:</li>
          </ul>
        </div>
        <div className='user-actions'>
          <a href='#' className='btn btn-primary btn-block'>Add</a>
          <a href='#' className='btn btn-outline-primary btn-block'>Some Action</a>
        </div>
      </Card>
    )
  }
}

export default UserCard