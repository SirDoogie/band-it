import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Wrapper from '../../components/layout/Wrapper'
import ConversationCard from '../../components/users/ConversationCard'
import AdvertisingPanel from '../../components/advertising/AdvertisingPanel'
import { connect } from 'react-redux'
import { conversationActions } from '../../actions/'
import { messageActions } from '../../actions/'
import debounce from 'lodash.debounce'

class Conversations extends Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.getMessage = this.getMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)

    this.query = debounce(searchText => {
      this.props.dispatch(conversationActions.getConversations(searchText))
    }, 700)
  }

  componentDidMount() {
    this.props.dispatch(conversationActions.getConversations())
  }

  onInputChange(e) {
    const searchText = e.target.value
    this.query(searchText)
  }

  getMessage(e) {
    if (this.props.messages && this.props.messages.id != e.currentTarget.id) {
      this.props.dispatch(messageActions.getMessages(e.currentTarget.id))
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
  }

  render() {
    const conversations = this.props.conversations
    const messages = this.props.messages

    return (
      <Wrapper class={'main'}>
        <Container>
          <Row>
            <Col id={'conversations'} xs={'10'}>
              <ConversationCard
                conversations={conversations}
                onInputChange={this.onInputChange}
                getMessage={this.getMessage}
                messages={messages}
                addMessage={this.addMessage}
              />
            </Col>
            <AdvertisingPanel/>
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
    messages: state.messages,
    conversationId: state.messages.id
  }
}

export default connect(mapStateToProps)(Conversations)
