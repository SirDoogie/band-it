import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../../components/layout/Wrapper'
import AdvertisementPanel from '../../components/advertising/AdvertisingPanel'
import FriendsFilter from '../../components/friends/FriendsFilter'
import FriendsGrid from '../../components/friends/FriendsGrid'

import { friendActions } from '../../actions'

class FriendsPage extends Component {
  constructor(props) {
    super(props)

    this.removeFriend = this.removeFriend.bind(this)
  }

  componentDidMount() {
    const user = this.props.currentUser
    if(user.id) {
      this.props.dispatch(friendActions.getAll(user.id))
    }
  }

  removeFriend(id) {
    this.props.dispatch(friendActions.removeFriend(id))
  }

  render() {
    return(
      <Wrapper class={ 'main wrapper-friends' }>
        <Container>
          <Row>
            <Col xs={ '3' }>
              <FriendsFilter/>
            </Col>
            <Col xs={ '7' }>
              <FriendsGrid friends={this.props.friends} removeFriend={this.removeFriend}/>
            </Col>
            <AdvertisementPanel/>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    currentUser: state.auth.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(FriendsPage))