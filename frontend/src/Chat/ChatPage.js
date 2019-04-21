import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Wrapper from '_components/layout/Wrapper'
import ChatCard from '_components/users/ChatCard'
import AdvertisingPanel from '_components/advertising/AdvertisingPanel'
import { connect } from 'react-redux'
import { conversationActions, messageActions } from '_actions'
import debounce from 'lodash.debounce'

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.getConversations = this.getConversations.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.getMessage = this.getMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.getPagyMessage = this.getPagyMessage.bind(this)
    this.query = debounce(searchText => {
      this.props.dispatch(
        conversationActions.getConversationsFilter(searchText)
      )
    }, 700)
  }

  componentDidMount() {
    this.props.dispatch(conversationActions.getConversations())
  }

  onInputChange(e) {
    this.query(e.target.value)
  }

  getConversations() {
    if (this.props.conversationsPagination.next !== null) {
      this.props.dispatch(
        conversationActions.getConversationsPagy(
          this.props.searchValue,
          this.props.conversationsPagination.next
        )
      )
    }
  }

  getMessage(e) {
    if (this.props.messages && this.props.messages.id != e.currentTarget.id) {
      this.props.dispatch(messageActions.getMessages(e.currentTarget.id, '1'))
    }
  }

  getPagyMessage() {
    if (this.props.messages.pagination.next !== null) {
      this.props.dispatch(
        messageActions.getMessages(
          this.props.messages.id,
          this.props.messages.pagination.next
        )
      )
    }
  }

  addMessage(body) {
    this.props.dispatch(
      messageActions.sendMessage(
        this.props.conversationId,
        body,
        this.props.userId
      )
    )
    this.props.dispatch(
      messageActions.getMessages(this.props.conversationId, '1')
    )
    this.props.dispatch(conversationActions.getConversations())
  }

  render() {
    return (
      <Wrapper class={'main'}>
        <Container>
          <Row>
            <Col id={'conversations'} xs={'10'}>
              <ChatCard
                conversations={this.props.conversations.chats}
                conversationsLoading={this.props.conversationsLoading}
                getConversations={this.getConversations}
                onInputChange={this.onInputChange}
                messages={this.props.messages}
                getMessage={this.getMessage}
                addMessage={this.addMessage}
                loadingMsg={this.props.loadingMsg}
                getPagyMessage={this.getPagyMessage}
              />
            </Col>
            <AdvertisingPanel />
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.auth.currentUser.id,
    conversations: state.conversations,
    conversationsLoading: state.conversations.loading,
    conversationsPagination: state.conversations.pagination,
    searchValue: state.conversations.searchValue,
    messages: state.messages,
    conversationId: state.messages.id,
    loadingMsg: state.messages.loading
  }
}

export default connect(mapStateToProps)(ChatPage)
