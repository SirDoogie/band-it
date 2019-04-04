import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '../../components/layout/Wrapper'
import AdvertisementPanel from '../../components/advertising/AdvertisingPanel'
import UsersList from '../../components/users/UsersList'
import { userActions } from '../../actions'

class UsersPage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }
  render() {
    const users = this.props.users

    return(
      <Wrapper class={ 'main wrapper-friends' }>
        <Container>
          <Row>
            <Col xs={ '3' }>
            </Col>
            <Col xs={ '7' }>
              <UsersList users={users}/>
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
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps)(UsersPage))