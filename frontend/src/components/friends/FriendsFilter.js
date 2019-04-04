import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class FriendsFilter extends Component {
  render() {
    //const filter = this.props.filter_status

    return (
      <ListGroup className={ 'friends-filter-list' }>
        <ListGroupItem active tag='a' href='#' action>All friends</ListGroupItem>
        <ListGroupItem tag='a' href='#' action>Friends Online</ListGroupItem>
        <Link to={'/friends/add'} className={'list-group-item-action list-group-item'}>Search New friends</Link>
        <ListGroupItem tag='button'>My Band</ListGroupItem>
        <ListGroupItem tag='button'>Blocked friends</ListGroupItem>
      </ListGroup>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter_status: state.friends.filter
  }
}

export default connect(mapStateToProps)(FriendsFilter)