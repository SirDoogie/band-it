import React, { Component } from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import { SearchIcon } from '../../images'

import UserCard from './UserCard'
import FriendCard from '../friends/FriendsGrid'

class UsersList extends Component {
  render() {
    const users = this.props.users

    return(
      <Card className={'content-card'}>
        <div className='header'>
          <CardTitle>
            People
            { users.data &&
            <small className={'subtitle'}>{ users.data.length }</small>
            }
          </CardTitle>
        </div>
        <div className='card-search'>
          <div className='icon'>
            <InlineSVG raw src={SearchIcon}/>
          </div>
          <input type='text' className='search-field'/>
        </div>
        <CardBody className={'body-list'}>
          { users.data &&
            users.data.map((user) =>
              <UserCard user={user} key={user.id}/>
            )
          }
        </CardBody>
      </Card>
    )
  }
}

export default UsersList

