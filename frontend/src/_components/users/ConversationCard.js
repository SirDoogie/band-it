import React, { Component } from 'react'
import { Card } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import AddIcon from '_assets/images/icons/add.svg'
import SearchIcon from '_assets/images/icons/feed_search.svg'
import ShowMoreIcon from '_assets/images/icons/more-ico.svg'
import atachImg from '_assets/images/icons/attach.svg'
import Conversation from '_components/conversation/Conversation'
import Message from '_components/message/Message'
import ScrollToBottom from 'react-scroll-to-bottom'

class ConversationCard extends Component {
  constructor(props) {
    super(props)
    this.state = { msg: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ msg: e.target.value })
  }

  handleClick() {
    this.props.addMessage(this.state.msg)
    this.setState({ msg: '' })
  }

  render() {
    const conversations = this.props.conversations
    const messages = this.props.messages
    return (
      <div className='chat-container'>
        <Card className='conversation-card'>
          <div className='conversation-header'>
            <span className='conversation-title'>Your message</span>
            <div className='conversation-add-ico'>
              <a href='#!' className='add-ico'>
                <InlineSVG src={AddIcon} />
              </a>
            </div>
          </div>
          <div className='conversation-search'>
            <div className='conversation-search-ico'>
              <a href='#!' className={'search-btn'}>
                <InlineSVG src={SearchIcon} />
              </a>
            </div>
            <div className='search-input-title'>
              <input
                className='search-text'
                type='text'
                placeholder='Search'
                onChange={this.props.onInputChange}
              />
            </div>
          </div>
          <hr className='search-hr' />
          <div className='conversation-container'>
            {conversations.conversations &&
              conversations.conversations.map(userConv => (
                <Conversation
                  user={userConv}
                  getMessage={this.props.getMessage}
                  convId={userConv.id}
                  key={userConv.id}
                />
              ))}
          </div>
        </Card>
        <Card className='chat-card'>
          {!messages.messages && (
            <div className='no-selected-conv'>
              <span className='str'>
                Please select a chat to start messaging
              </span>
            </div>
          )}
          {messages.messages && (
            <div>
              <div className='chat-header'>
                <span className='chat-user'>All messages</span>
                <div className='chat-tools'>
                  <div className='chat-search-ico'>
                    <a href='#!' className={'search-btn'}>
                      <InlineSVG src={SearchIcon} />
                    </a>
                  </div>
                  <div className='chat-more-ico'>
                    <a href='#!' className={'more-btn'}>
                      <InlineSVG src={ShowMoreIcon} />
                    </a>
                  </div>
                </div>
              </div>
              <hr className='search-hr' />
              <ScrollToBottom className='message-container'>
                {messages.messages &&
                  messages.messages.map(userMsg => <Message msg={userMsg} />)}
              </ScrollToBottom>
              <hr className='search-hr' />
              <div className='input-text-message'>
                <div className='attach-ico'>
                  <a href='#!' className={'attach-btn'}>
                    <InlineSVG src={atachImg} />
                  </a>
                </div>
                <div className='search-input-msg'>
                  <input
                    className='search-text'
                    type='text'
                    placeholder='Write your message'
                    onChange={this.handleChange}
                    value={this.state.msg}
                  />
                </div>
                <div className='button-message'>
                  <button className='btn-msg' onClick={this.handleClick}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    )
  }
}

export default ConversationCard
