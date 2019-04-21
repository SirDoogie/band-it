import React, { Component } from 'react'

import { Card } from 'reactstrap'

import Conversations from '../chat/Conversations'
import Messages from '../chat/Messages'

class ChatCard extends Component {
  render() {
    return (
      <div className='chat-container'>
        <Conversations
          conversations={this.props.conversations}
          conversationsNextPage={this.props.getChatNextPage}
          conversationsLoading={this.props.conversationsLoading}
          getConversations={this.props.getConversations}
          onInputChange={this.props.onInputChange}
          getMessage={this.props.getMessage}
          messages={this.props.messages}
        />
        <Messages
          messages={this.props.messages}
          conversations={this.props.conversations}
          getPagyMessage={this.props.getPagyMessage}
          loadingMsg={this.props.loadingMsg}
          addMessage={this.props.addMessage}
          conversationsLoading={this.props.conversationsLoading}
        />
      </div>
    )
  }
}

export default ChatCard
