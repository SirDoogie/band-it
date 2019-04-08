import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withCookies } from 'react-cookie'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import Wrapper from '_components/layout/Wrapper'
import ProfileCard from '_components/users/ProfileCard'
import AdvertisementPanel from '_components/advertising/AdvertisingPanel'
import FeedCard from '_components/users/FeedCard'
import { authActions } from '_actions'

class Feed extends Component {


  render() {
    const currentUser = this.props.currentUser

    return (
      <Wrapper class={'main wrapper-feed'}>
        {currentUser.loading && (
          <Loader type='Audio' color='#fff' height={150} width={150} />
        )}
        {currentUser.id && (
          <Container>
            <Row>
              <Col id={'profile'} xs={'3'}>
                <ProfileCard user={currentUser} compact />
              </Col>
              <Col id={'feed'} xs={'7'}>
                <FeedCard />
              </Col>
              <AdvertisementPanel />
            </Row>
          </Container>
        )}
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser
  }
}

export default withCookies(withRouter(connect(mapStateToProps)(Feed)))
