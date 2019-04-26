import React, { Component } from 'react'
import { Card } from 'reactstrap'
import ClipLoader from 'react-spinners/ClipLoader'
import InlineSVG from 'svg-inline-react'
import SearchIcon from '_assets/images/icons/feed_search.svg'
import ShowMoreIcon from '_assets/images/icons/more-ico.svg'
import AtachImg from '_assets/images/icons/attach.svg'
import LoadingOverlay from 'react-loading-overlay'
import InfiniteScrollReverse from 'react-infinite-scroll-reverse'
import MessageSingle from '../message/Message'

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = { msg: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this)
  }

  componentDidUpdate() {
    if (this.nameInput != undefined) {
      this.nameInput.focus()
    }
  }

  handleChange(e) {
    this.setState({ msg: e.target.value })
  }

  handleClick() {
    this.props.addMessage(this.state.msg)
    this.setState({ msg: '' })
  }

  handleEnterKeyPress(e) {
    if (e.charCode == 13) {
      this.handleClick()
    }
  }

  render() {
    const messages = this.props.messages

    return (
      <Card className="chat-card">
        {!messages.messages && this.props.conversations && (
          <div className="no-selected-conv">
            <span className="str">Please select a chat to start messaging</span>
          </div>
        )}
        {!this.props.conversations && (
          <div
            className="no-selected-conv"
            style={{ marginTop: '0px', height: '100%' }}
          >
            <LoadingOverlay
              spinner={<ClipLoader size={50} />}
              active={this.props.conversationsLoading}
              styles={{
                overlay: base => ({
                  ...base,
                  background: 'rgba(0, 0, 0, 0.15)'
                }),
                wrapper: base => ({
                  ...base,
                  margin: 'auto'
                })
              }}
            />
          </div>
        )}
        <LoadingOverlay
          active={this.props.loadingMsg}
          styles={{
            overlay: base => ({
              ...base,
              background: 'rgba(255, 255, 255, 0.5)'
            }),
            wrapper: base => ({
              ...base
            })
          }}
        >
          {messages.messages && (
            <div>
              <div className="chat-header">
                <span className="chat-user">All messages</span>
                <div className="chat-tools">
                  <div className="chat-search-ico">
                    <a href="#!" className={'search-btn'}>
                      <InlineSVG src={SearchIcon} />
                    </a>
                  </div>
                  <div className="chat-more-ico">
                    <a href="#!" className={'more-btn'}>
                      <InlineSVG src={ShowMoreIcon} />
                    </a>
                  </div>
                </div>
              </div>
              <hr className="search-hr" />

              <InfiniteScrollReverse
                className="message-container"
                loadMore={this.props.getPagyMessage}
                hasMore={true}
                isLoading={this.props.loadingMsg}
              >
                {messages.messages &&
                  messages.messages
                    .map(userMsg => (
                      <MessageSingle msg={userMsg} key={userMsg.id} />
                    ))
                    .reverse()}
              </InfiniteScrollReverse>
              <hr className="search-hr" />
              <div className="input-text-message">
                <div className="attach-ico">
                  <a href="#!" className={'attach-btn'}>
                    <InlineSVG src={AtachImg} />
                  </a>
                </div>
                <div className="search-input-msg">
                  <input
                    className="search-text"
                    type="text"
                    placeholder="Write your message"
                    onChange={this.handleChange}
                    value={this.state.msg}
                    onKeyPress={this.handleEnterKeyPress}
                    ref={input => {
                      this.nameInput = input
                    }}
                  />
                </div>
                <div className="button-message">
                  <button className="btn-msg" onClick={this.handleClick}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </LoadingOverlay>
      </Card>
    )
  }
}

export default Messages
