import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Wrapper from '_components/layout/Wrapper'
import AdvertisementPanel from '_components/advertising/AdvertisingPanel'
import UsersList from '_components/users/UsersList'
import { userActions } from '_actions'
import debounce from 'lodash.debounce'

class UsersPage extends Component {
  constructor(props) {
    super(props)
    this.getAll = this.getAll.bind(this)
    this.getNextPage = this.getNextPage.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {
      searchValue: ''
    }

    this.query = debounce(searchText => {
      this.props.dispatch(userActions.getAll(searchText, ''))
    }, 700)
  }

  onInputChange(e) {
    this.query(e.target.value)
    this.setState({ searchValue: e.target.value })
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.getAll(this.props.location.state.searchValue, '')
      this.setState({ searchValue: this.props.location.state.searchValue })
    } else {
      this.getAll(null, '')
    }
  }

  getNextPage() {
    if (this.state.searchValue !== '') {
      this.getAll(this.state.searchValue, this.props.usersPagination.next)
    } else {
      this.getAll(null, this.props.usersPagination.next)
    }
  }

  getAll(searchValue, paginatonPage) {
    this.props.dispatch(userActions.getAll(searchValue, paginatonPage))
  }
  render() {
    const users = this.props.users.users

    return (
      <Wrapper class={'main wrapper-friends'}>
        <Container>
          <Row>
            <Col xs={'3'} />
            <Col xs={'7'}>
              <UsersList
                users={users}
                loading={this.props.loading}
                getNextPage={this.getNextPage}
                userCount={this.props.usersPagination}
                searchValue={this.state.searchValue}
                onInputChange={this.onInputChange}
              />
            </Col>
            <AdvertisementPanel />
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    usersPagination: state.users.pagination,
    loading: state.users.loading
  }
}

export default withRouter(connect(mapStateToProps)(UsersPage))
