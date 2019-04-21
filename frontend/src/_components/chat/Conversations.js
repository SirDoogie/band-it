import React, { Component } from 'react'
import { Card } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import AddIcon from '_assets/images/icons/add.svg'
import SearchIcon from '_assets/images/icons/feed_search.svg'
import LoadingOverlay from 'react-loading-overlay'
import ScrollArea from 'react-scrollbar'
import ClipLoader from 'react-spinners/ClipLoader'
import ConversationSingle from '../conversation/Conversation'

class Conversation extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    if (e.realHeight !== 0) {
      const bottomPosition = e.realHeight - e.topPosition === e.containerHeight
      if (bottomPosition && !this.props.conversationsLoading) {
        this.props.getConversations()
      }
    }
  }

  render() {
    const scrollBarVerticalStyle = {
      width: '5px',
      background: '#0182E8',
      marginLeft: 'auto',
      borderRadius: '2px'
    }
    const scrollBarVerticalContainerStyle = {
      backgroundColor: 'transparent'
    }
    const conversationsLoading = this.props.conversationsLoading
    const conversations = this.props.conversations

    return (
      <Card className="conversation-card">
        <div className="conversation-header">
          <span className="conversation-title">Your message</span>
          <div className="conversation-add-ico">
            <a href="#!" className="add-ico">
              <InlineSVG src={AddIcon} />
            </a>
          </div>
        </div>
        <div className="conversation-search">
          <div className="conversation-search-ico">
            <a href="#!" className={'search-btn'}>
              <InlineSVG src={SearchIcon} />
            </a>
          </div>
          <div className="search-input-title">
            <input
              className="search-text"
              type="text"
              placeholder="Search"
              onChange={this.props.onInputChange}
            />
          </div>
        </div>
        <hr className="search-hr" />
        {!conversations && (
          <LoadingOverlay
            spinner={<ClipLoader size={50} />}
            active={conversationsLoading}
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
        )}
        {conversations && (
          <LoadingOverlay
            spinner={<ClipLoader size={50} />}
            active={conversationsLoading}
            styles={{
              overlay: base => ({
                ...base,
                background: 'rgba(0, 0, 0, 0)'
              }),
              wrapper: base => ({
                ...base,
                display: 'flex',
                flexDirection: 'column'
              })
            }}
          >
            <ScrollArea
              className="area"
              contentClassName="conversation-container"
              verticalScrollbarStyle={scrollBarVerticalStyle}
              verticalContainerStyle={scrollBarVerticalContainerStyle}
              onScroll={this.handleScroll}
              stopScrollPropagation={true}
              speed={0.5}
              smoothScrolling={true}
            >
              {conversations.map(userConv => (
                <ConversationSingle
                  user={userConv}
                  getMessage={this.props.getMessage}
                  convId={userConv.id}
                  key={userConv.id}
                  messages={this.props.messages}
                />
              ))}
            </ScrollArea>
            {conversations.length === 0 && (
              <div className="zero_conv">Nothing....</div>
            )}
          </LoadingOverlay>
        )}
      </Card>
    )
  }
}

export default Conversation
