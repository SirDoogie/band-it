import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <div className="message-block">
        <div className="avatar-icon">
          <div className="profile-img-msg">
            <img
              src={this.props.msg.user.profile.avatar_url}
              alt="User Name"
              className="img-fluid"
            />
            <span className="presence-pill offline" />
          </div>
        </div>
        <div className="message-body">
          <div className="user-name-time">
            <span className="chat-user">
              {this.props.msg.user.profile.full_name}
            </span>
            <span className="time-msg">{this.props.msg.created_at}</span>
          </div>
          <span className="msg-text">{this.props.msg.body}</span>
        </div>
      </div>
    )
  }
}

export default Message
