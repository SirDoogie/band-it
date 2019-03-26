import React, { Component } from 'react'

class Conversation extends Component {
  render() {
    return (
      <div
        className='conversation-block'
        id={this.props.convId}
        onClick={this.props.getMessage}
      >
        <div className='conversation-info'>
          <div className='avatar-ico'>
            <div className='profile-img'>
              <img
                src={this.props.user.user.profile.avatar_url}
                alt='User Name'
                className='img-fluid'
              />
              <span className='presence-pill offline' />
            </div>
          </div>
          <div className='last-message'>
            <span className='user-name'>
              {this.props.user.user.profile.first_name}{' '}
              {this.props.user.user.profile.last_name}
            </span>
            <span className='message'>{this.props.user.message.body}</span>
          </div>
          <span className='time-message'>
            {this.props.user.message.created_at}
          </span>
        </div>
        <hr className='conversation-hr' />
      </div>
    )
  }
}

export default Conversation
