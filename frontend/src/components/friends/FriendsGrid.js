import React, { Component } from 'react'
import { Card, CardTitle, CardBody } from 'reactstrap'
import InlineSVG from 'svg-inline-react'
import { SearchIcon } from '../../images'

import FriendCard from './FriendCard'

class FriendsGrid extends Component {
  render() {
    const friends = this.props.friends

    return(
      <Card className={'content-card'}>
        <div className='header'>
          <CardTitle>
            Friends
            { friends.users &&
              <small className={'subtitle'}>{ friends.users.length }</small>
            }
          </CardTitle>
        </div>
        <div className='card-search'>
          <div className='icon'>
            <InlineSVG raw src={SearchIcon}/>
          </div>
          <input type='text' className='search-field'/>
        </div>
        <CardBody className={'body-grid'}>
          { friends.loading &&
            <p>Loading...</p>
          }
          { friends.users &&
            friends.users.map((friend) =>
              <FriendCard user={friend} key={friend.id} removeFriend={this.props.removeFriend}/>
            )
          }
        </CardBody>
      </Card>
    )
  }
}

export default FriendsGrid